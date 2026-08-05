import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuid } from "uuid";
import Razorpay from "razorpay";
// FIX: Removed getPool(), using the correct PostgreSQL query functions
import { queryAll, queryOne, runQuery } from "./database.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3001;

const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || "rzp_live_TLxyAdwAjXyAWg";
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || "ncklB3pr5kF66xLQt5FbU2Ui";

let razorpay = null;
if (RAZORPAY_KEY_SECRET) {
  razorpay = new Razorpay({ key_id: RAZORPAY_KEY_ID, key_secret: RAZORPAY_KEY_SECRET });
}

// Middleware
app.use(cors({ origin: ["http://localhost:8080", "http://localhost:5173"], credentials: true }));
app.use(express.json({ limit: "50mb" }));
app.use("/uploads", express.static(path.resolve(__dirname, "../uploads")));

// File upload config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.resolve(__dirname, "../uploads")),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${uuid()}${ext}`);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|webp|svg/;
    const ext = allowed.test(path.extname(file.originalname).toLowerCase());
    const mime = allowed.test(file.mimetype);
    if (ext && mime) return cb(null, true);
    cb(new Error("Only image files (jpg, png, gif, webp, svg) are allowed"));
  },
});

// ==================== PRODUCTS API ====================

// GET /api/products — list with filters
app.get("/api/products", async (req, res) => {
  try {
    const { category, gender, minPrice, maxPrice, search, sort = "popular", page = "1", limit = "50" } = req.query;

    let sql = "SELECT * FROM products WHERE status = 'active'";
    const params = [];
    let paramIndex = 1;

    if (category) { sql += ` AND category = $${paramIndex++}`; params.push(category); }
    if (gender) { sql += ` AND gender = $${paramIndex++}`; params.push(gender); }
    if (minPrice) { sql += ` AND price >= $${paramIndex++}`; params.push(parseInt(minPrice)); }
    if (maxPrice) { sql += ` AND price <= $${paramIndex++}`; params.push(parseInt(maxPrice)); }
    if (search) {
      // Postgres uses ILIKE for case-insensitive search
      sql += ` AND (name ILIKE $${paramIndex++} OR description ILIKE $${paramIndex++} OR notes ILIKE $${paramIndex++})`;
      const s = `%${search}%`;
      params.push(s, s, s);
    }

    switch (sort) {
      case "price-asc": sql += " ORDER BY price ASC"; break;
      case "price-desc": sql += " ORDER BY price DESC"; break;
      case "newest": sql += " ORDER BY created_at DESC"; break;
      default: sql += " ORDER BY review_count DESC";
    }

    const allProducts = await queryAll(sql, params);
    const total = allProducts.length;
    const p = parseInt(page);
    const lmt = parseInt(limit);
    const paged = allProducts.slice((p - 1) * lmt, p * lmt);

    const parsed = paged.map((prod) => ({
      ...prod,
      images: typeof prod.images === "string" ? JSON.parse(prod.images) : prod.images,
      sizes: typeof prod.sizes === "string" ? JSON.parse(prod.sizes) : prod.sizes,
      noteImages: typeof prod.note_images === "string" ? JSON.parse(prod.note_images) : (prod.note_images || []),
    }));

    res.json({ products: parsed, total, page: p, totalPages: Math.ceil(total / lmt) });
  } catch (err) {
    console.error("Products fetch error:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// GET /api/products/:slug — single product
app.get("/api/products/:slug", async (req, res) => {
  try {
    const product = await queryOne("SELECT * FROM products WHERE slug = $1 OR id = $2", [req.params.slug, req.params.slug]);
    if (!product) return res.status(404).json({ error: "Product not found" });
    
    product.images = typeof product.images === "string" ? JSON.parse(product.images) : product.images;
    product.sizes = typeof product.sizes === "string" ? JSON.parse(product.sizes) : product.sizes;
    product.noteImages = typeof product.note_images === "string" ? JSON.parse(product.note_images) : (product.note_images || []);
    
    res.json(product);
  } catch (err) {
    console.error("Product fetch error:", err);
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

// POST /api/products — create product (admin)
app.post("/api/products", async (req, res) => {
  try {
    const product = req.body;
    const id = product.id || `p${Date.now()}`;
    const sizes = product.sizes || ["50ml"];
    const sizesJson = typeof sizes === "string" ? sizes : JSON.stringify(sizes);
    
    await runQuery(
      `INSERT INTO products (id, name, slug, category, price, original_price, description, notes, top_notes, middle_notes, base_notes, how_to_use, images, sizes, gender, stock, rating, review_count, badge, status, note_images)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)`,
      [id, product.name, product.slug, product.category, product.price, product.originalPrice || null, product.description,
       product.notes || "", product.topNotes || "", product.middleNotes || "", product.baseNotes || "", product.howToUse || "",
       JSON.stringify(product.images || []), sizesJson, product.gender || "Unisex",
       product.stock || 0, product.rating || 4.5, product.reviewCount || 0, product.badge || null, product.status || "active", JSON.stringify(product.noteImages || [])]
    );
    res.status(201).json({ id, message: "Product created" });
  } catch (err) {
    console.error("Create product error:", err);
    res.status(500).json({ error: "Failed to create product" });
  }
});

// PUT /api/products/:id — update product (admin)
app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const p = req.body;
    const sizes = p.sizes || ["50ml"];
    const sizesJson = typeof sizes === "string" ? sizes : JSON.stringify(sizes);
    
    await runQuery(
      `UPDATE products SET name=$1, slug=$2, category=$3, price=$4, original_price=$5, description=$6, notes=$7, top_notes=$8, middle_notes=$9, base_notes=$10, how_to_use=$11, images=$12, sizes=$13, gender=$14, stock=$15, rating=$16, review_count=$17, badge=$18, status=$19, note_images=$20 WHERE id=$21`,
      [p.name, p.slug, p.category, p.price, p.originalPrice || null, p.description, p.notes || "", p.topNotes || "",
       p.middleNotes || "", p.baseNotes || "", p.howToUse || "", JSON.stringify(p.images || []), sizesJson,
       p.gender || "Unisex", p.stock || 0, p.rating || 4.5, p.reviewCount || 0, p.badge || null, p.status || "active", JSON.stringify(p.noteImages || []), id]
    );
    res.json({ message: "Product updated" });
  } catch (err) {
    console.error("Update product error:", err);
    res.status(500).json({ error: "Failed to update product" });
  }
});

// DELETE /api/products/:id — delete product (admin)
app.delete("/api/products/:id", async (req, res) => {
  try {
    await runQuery("DELETE FROM products WHERE id = $1", [req.params.id]);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete product" });
  }
});

// POST /api/upload & POST /api/upload/multiple remains unchanged
app.post("/api/upload", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  const url = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
  res.json({ url, filename: req.file.filename });
});

app.post("/api/upload/multiple", upload.array("images", 10), (req, res) => {
  if (!req.files || req.files.length === 0) return res.status(400).json({ error: "No files uploaded" });
  const urls = req.files.map((f) => `${req.protocol}://${req.get("host")}/uploads/${f.filename}`);
  res.json({ urls });
});

// ==================== CATEGORIES API ====================

app.get("/api/categories", async (req, res) => {
  try {
    const dbCategories = await queryAll("SELECT * FROM categories ORDER BY name ASC");
    const dbNames = new Set(dbCategories.map((c) => c.name));
    
    const productCategories = await queryAll(
      "SELECT DISTINCT category FROM products WHERE category IS NOT NULL AND category != ''"
    );
    
    for (const pc of productCategories) {
      if (!dbNames.has(pc.category)) {
        dbCategories.push({
          id: `prod-${pc.category}`,
          name: pc.category,
          slug: pc.category.toLowerCase().replace(/\s+/g, "-"),
          image: "",
          description: "",
        });
      }
    }
    res.json(dbCategories);
  } catch (err) {
    console.error("Categories fetch error:", err);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

app.post("/api/categories", async (req, res) => {
  try {
    const { name, image, description } = req.body;
    if (!name) return res.status(400).json({ error: "Category name is required" });
    const id = `cat${Date.now()}`;
    const slug = name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    
    await runQuery(
      "INSERT INTO categories (id, name, slug, image, description) VALUES ($1, $2, $3, $4, $5)",
      [id, name, slug, image || "", description || ""]
    );
    res.status(201).json({ id, message: "Category created" });
  } catch (err) {
    console.error("Create category error:", err);
    res.status(500).json({ error: "Failed to create category" });
  }
});

app.put("/api/categories/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, description } = req.body;
    const slug = name ? name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") : undefined;
    
    let sql = "UPDATE categories SET";
    const params = [];
    const updates = [];
    let paramIndex = 1;
    
    if (name !== undefined) { updates.push(` name=$${paramIndex++}`); params.push(name); updates.push(` slug=$${paramIndex++}`); params.push(slug); }
    if (image !== undefined) { updates.push(` image=$${paramIndex++}`); params.push(image); }
    if (description !== undefined) { updates.push(` description=$${paramIndex++}`); params.push(description); }
    
    if (updates.length === 0) return res.status(400).json({ error: "No fields to update" });
    
    sql += updates.join(",") + ` WHERE id=$${paramIndex}`;
    params.push(id);
    
    await runQuery(sql, params);
    res.json({ message: "Category updated" });
  } catch (err) {
    console.error("Update category error:", err);
    res.status(500).json({ error: "Failed to update category" });
  }
});

app.delete("/api/categories/:id", async (req, res) => {
  try {
    await runQuery("DELETE FROM categories WHERE id = $1", [req.params.id]);
    res.json({ message: "Category deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete category" });
  }
});

// ==================== CONTACT MESSAGES API ====================

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required" });
    }
    const id = `msg${Date.now()}`;
    await runQuery(
      "INSERT INTO contact_messages (id, name, email, subject, message) VALUES ($1, $2, $3, $4, $5)",
      [id, name, email, subject || "", message]
    );
    res.status(201).json({ id, message: "Message sent successfully" });
  } catch (err) {
    console.error("Contact message error:", err);
    res.status(500).json({ error: "Failed to send message" });
  }
});

app.get("/api/contact", async (req, res) => {
  try {
    const messages = await queryAll("SELECT * FROM contact_messages ORDER BY created_at DESC");
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

app.put("/api/contact/:id/read", async (req, res) => {
  try {
    await runQuery("UPDATE contact_messages SET is_read = 1 WHERE id = $1", [req.params.id]);
    res.json({ message: "Message marked as read" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update message" });
  }
});

app.delete("/api/contact/:id", async (req, res) => {
  try {
    await runQuery("DELETE FROM contact_messages WHERE id = $1", [req.params.id]);
    res.json({ message: "Message deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete message" });
  }
});

// ==================== SETTINGS API ====================

app.get("/api/settings", async (req, res) => {
  try {
    const settings = await queryAll("SELECT * FROM settings");
    const result = {};
    for (const s of settings) {
      result[s.setting_key] = s.setting_value;
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch settings" });
  }
});

app.put("/api/settings", async (req, res) => {
  try {
    const settings = req.body;
    for (const [key, value] of Object.entries(settings)) {
      // FIX: Postgres uses ON CONFLICT instead of ON DUPLICATE KEY
      await runQuery(
        "INSERT INTO settings (setting_key, setting_value) VALUES ($1, $2) ON CONFLICT (setting_key) DO UPDATE SET setting_value = $3",
        [key, value, value]
      );
    }
    res.json({ message: "Settings updated" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update settings" });
  }
});

// ==================== ORDERS API ====================

app.get("/api/orders", async (req, res) => {
  try {
    const orders = await queryAll("SELECT * FROM orders ORDER BY created_at DESC");
    for (const order of orders) {
      order.items = await queryAll("SELECT * FROM order_items WHERE order_id = $1", [order.id]);
    }
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

app.post("/api/orders", async (req, res) => {
  try {
    const { customerName, customerEmail, customerPhone, address, city, state, pincode, items, paymentMethod = "razorpay" } = req.body;

    if (!customerName || !customerEmail || !customerPhone || !address || !city || !state || !pincode || !items?.length) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    let subtotal = 0;
    const orderItems = [];

    for (const item of items) {
      // FIX: Used PostgreSQL queryOne
      const product = await queryOne("SELECT * FROM products WHERE id = $1", [item.productId]);
      if (!product) return res.status(400).json({ error: `Product ${item.productId} not found` });
      
      const sizes = typeof product.sizes === "string" ? JSON.parse(product.sizes) : product.sizes;
      let price = Number(product.price);
      
      if (Array.isArray(sizes) && sizes.length > 0 && typeof sizes[0] === "object") {
        const matchedSize = sizes.find((s) => s.size === item.size);
        if (matchedSize && matchedSize.price) {
          price = Number(matchedSize.price);
        }
      }
      
      subtotal += price * item.quantity;
      orderItems.push({
        id: uuid(),
        productId: product.id,
        productName: product.name,
        size: item.size || (Array.isArray(sizes) && typeof sizes[0] === "object" ? sizes[0]?.size : sizes?.[0]) || "50ml",
        quantity: item.quantity,
        price,
      });
    }

    let shipping = 0;
    if (city.trim().toLowerCase() === "rajkot") {
        shipping = 0;
    }

    const total = subtotal + shipping;
    const orderId = "ORD-" + Date.now().toString().slice(-6);

    let razorpayOrder = null;
    if (paymentMethod === "razorpay" && razorpay) {
      try {
        razorpayOrder = await razorpay.orders.create({
          amount: Math.round(total * 100),
          currency: "INR",
          receipt: orderId,
          notes: { orderId },
        });
      } catch (err) {
        console.error("Razorpay error:", err.message);
      }
    }

    await runQuery(
      `INSERT INTO orders (id, customer_name, customer_email, customer_phone, address, city, state, pincode, subtotal, shipping, total, payment_method, razorpay_order_id, order_status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
      [orderId, customerName, customerEmail, customerPhone, address, city, state, pincode, subtotal, shipping, total, paymentMethod, razorpayOrder?.id || null, "Processing"]
    );

    for (const item of orderItems) {
      await runQuery(
        "INSERT INTO order_items (id, order_id, product_id, product_name, size, quantity, price) VALUES ($1, $2, $3, $4, $5, $6, $7)",
        [uuid(), orderId, item.productId, item.productName, item.size, item.quantity, item.price]
      );
      await runQuery("UPDATE products SET stock = stock - $1 WHERE id = $2", [item.quantity, item.productId]);
    }

    res.status(201).json({
      orderId,
      razorpayOrder: razorpayOrder ? {
        id: razorpayOrder.id,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        key_id: RAZORPAY_KEY_ID,
      } : null,
      total,
    });
  } catch (err) {
    console.error("Order creation error:", err);
    res.status(500).json({ error: "Failed to create order" });
  }
});

app.post("/api/orders/verify", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, orderId } = req.body;
    await runQuery(
      "UPDATE orders SET razorpay_payment_id = $1, payment_status = 'paid', order_status = 'Confirmed' WHERE razorpay_order_id = $2 OR id = $3",
      [razorpay_payment_id, razorpay_order_id, orderId]
    );
    res.json({ success: true, message: "Payment verified" });
  } catch (err) {
    res.status(500).json({ error: "Verification failed" });
  }
});

app.put("/api/orders/:id/status", async (req, res) => {
  try {
    const { order_status, payment_status } = req.body;
    if (order_status) {
      await runQuery("UPDATE orders SET order_status = $1 WHERE id = $2", [order_status, req.params.id]);
    }
    if (payment_status) {
      await runQuery("UPDATE orders SET payment_status = $1 WHERE id = $2", [payment_status, req.params.id]);
    }
    res.json({ message: "Order updated" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update order" });
  }
});

app.get("/api/orders/:id", async (req, res) => {
  try {
    const order = await queryOne("SELECT * FROM orders WHERE id = $1", [req.params.id]);
    if (!order) return res.status(404).json({ error: "Order not found" });
    order.items = await queryAll("SELECT * FROM order_items WHERE order_id = $1", [req.params.id]);
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch order" });
  }
});

// ==================== HEALTH CHECK ====================
app.get("/api/health", async (req, res) => {
  try {
    await runQuery("SELECT 1");
    res.json({ status: "ok", database: "postgres", timestamp: new Date().toISOString() });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

// Error handler for multer
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError || err.message?.includes("image")) {
    return res.status(400).json({ error: err.message });
  }
  next(err);
});

async function start() {
  app.listen(PORT, () => {
    console.log(`\n👑 King Perfumes Backend (PostgreSQL)`);
    console.log(`📍 http://localhost:${PORT}`);
    console.log(`📦 API: http://localhost:${PORT}/api/products`);
    console.log(`📸 Uploads served from /uploads`);
    console.log(`💳 Razorpay: ${razorpay ? "✅ Configured" : "⚠️  Not configured"}`);
    console.log(`\nTest: curl http://localhost:${PORT}/api/products\n`);
  });
}

start().catch((err) => {
  console.error("Failed to start server:", err.message);
  process.exit(1);
});