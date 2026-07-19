import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import { v4 as uuid } from "uuid";
import Razorpay from "razorpay";
import { queryAll, queryOne, runQuery, initializeDatabase } from "./database.js";

const app = express();

const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || "rzp_test_XXXXXXXXXXXXXXXX";
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || "";

let razorpay = null;
if (RAZORPAY_KEY_SECRET) {
  razorpay = new Razorpay({ key_id: RAZORPAY_KEY_ID, key_secret: RAZORPAY_KEY_SECRET });
}

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: "50mb" }));

// Serve uploaded files from the Vercel /tmp volume (ephemeral, single-instance).
// In production prefer Vercel Blob / a CDN; this keeps admin uploads working in-session.
app.use("/api/uploads", express.static("/tmp"));

// File upload config for Vercel (uses /tmp)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "/tmp"),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${uuid()}${ext}`);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|webp|svg/;
    const ext = allowed.test(path.extname(file.originalname).toLowerCase());
    const mime = allowed.test(file.mimetype);
    if (ext && mime) return cb(null, true);
    cb(new Error("Only image files (jpg, png, gif, webp, svg) are allowed"));
  },
});

// ==================== PRODUCTS API ====================

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
      sql += ` AND (name ILIKE $${paramIndex} OR description ILIKE $${paramIndex} OR notes ILIKE $${paramIndex})`;
      params.push(`%${search}%`);
      paramIndex++;
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
    }));

    res.json({ products: parsed, total, page: p, totalPages: Math.ceil(total / lmt) });
  } catch (err) {
    console.error("Products fetch error:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.get("/api/products/:slug", async (req, res) => {
  try {
    const product = await queryOne("SELECT * FROM products WHERE slug = $1 OR id = $1", [req.params.slug]);
    if (!product) return res.status(404).json({ error: "Product not found" });
    product.images = typeof product.images === "string" ? JSON.parse(product.images) : product.images;
    product.sizes = typeof product.sizes === "string" ? JSON.parse(product.sizes) : product.sizes;
    res.json(product);
  } catch (err) {
    console.error("Product fetch error:", err);
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const product = req.body;
    const id = product.id || `p${Date.now()}`;
    const sizes = product.sizes || ["50ml"];
    const sizesJson = typeof sizes === "string" ? sizes : JSON.stringify(sizes);

    await runQuery(
      `INSERT INTO products (id, name, slug, category, price, original_price, description, notes, top_notes, middle_notes, base_notes, how_to_use, images, sizes, gender, stock, rating, review_count, badge, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)`,
      [id, product.name, product.slug, product.category, product.price, product.originalPrice || null, product.description,
       product.notes || "", product.topNotes || "", product.middleNotes || "", product.baseNotes || "", product.howToUse || "",
       JSON.stringify(product.images || []), sizesJson, product.gender || "Unisex",
       product.stock || 0, product.rating || 4.5, product.reviewCount || 0, product.badge || null, product.status || "active"]
    );
    res.status(201).json({ id, message: "Product created" });
  } catch (err) {
    console.error("Create product error:", err);
    res.status(500).json({ error: "Failed to create product" });
  }
});

app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const p = req.body;
    const sizes = p.sizes || ["50ml"];
    const sizesJson = typeof sizes === "string" ? sizes : JSON.stringify(sizes);

    await runQuery(
      `UPDATE products SET name=$1, slug=$2, category=$3, price=$4, original_price=$5, description=$6, notes=$7, top_notes=$8, middle_notes=$9, base_notes=$10, how_to_use=$11, images=$12, sizes=$13, gender=$14, stock=$15, rating=$16, review_count=$17, badge=$18, status=$19 WHERE id=$20`,
      [p.name, p.slug, p.category, p.price, p.originalPrice || null, p.description, p.notes || "", p.topNotes || "",
       p.middleNotes || "", p.baseNotes || "", p.howToUse || "", JSON.stringify(p.images || []), sizesJson,
       p.gender || "Unisex", p.stock || 0, p.rating || 4.5, p.reviewCount || 0, p.badge || null, p.status || "active", id]
    );
    res.json({ message: "Product updated" });
  } catch (err) {
    console.error("Update product error:", err);
    res.status(500).json({ error: "Failed to update product" });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  try {
    await runQuery("DELETE FROM products WHERE id = $1", [req.params.id]);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete product" });
  }
});

// ==================== UPLOAD API ====================

app.post("/api/upload", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  // On Vercel, we return the path relative to the uploads directory
  // In production, use a CDN or Vercel Blob for persistent storage
  const host = req.get("host") || "localhost";
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const url = `${protocol}://${host}/api/uploads/${req.file.filename}`;
  res.json({ url, filename: req.file.filename });
});

app.post("/api/upload/multiple", upload.array("images", 10), (req, res) => {
  if (!req.files || req.files.length === 0) return res.status(400).json({ error: "No files uploaded" });
  const host = req.get("host") || "localhost";
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const urls = req.files.map((f) => `${protocol}://${host}/api/uploads/${f.filename}`);
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
    let paramIdx = 1;

    if (name !== undefined) { updates.push(` name=$${paramIdx++}`); params.push(name); updates.push(` slug=$${paramIdx++}`); params.push(slug); }
    if (image !== undefined) { updates.push(` image=$${paramIdx++}`); params.push(image); }
    if (description !== undefined) { updates.push(` description=$${paramIdx++}`); params.push(description); }

    if (updates.length === 0) return res.status(400).json({ error: "No fields to update" });

    sql += updates.join(",") + ` WHERE id=$${paramIdx}`;
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
      await runQuery(
        "INSERT INTO settings (setting_key, setting_value) VALUES ($1, $2) ON CONFLICT (setting_key) DO UPDATE SET setting_value = $2",
        [key, value]
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
    const rows = await queryAll("SELECT * FROM orders ORDER BY created_at DESC");
    for (const order of rows) {
      order.items = await queryAll("SELECT * FROM order_items WHERE order_id = $1", [order.id]);
    }
    res.json(rows);
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
      const products = await queryAll("SELECT * FROM products WHERE id = $1", [item.productId]);
      const product = products[0];
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

    const shipping = subtotal >= 999 ? 0 : 79;
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
    await queryAll("SELECT 1");
    res.json({ status: "ok", database: "postgres", timestamp: new Date().toISOString() });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

app.get("/api/debug", async (req, res) => {
  res.json({
    node: process.version,
    cwd: process.cwd(),
    postgresVersion: "@vercel/postgres 0.10.0",
    timestamp: new Date().toISOString(),
  });
});


// Error handler for multer
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError || err.message?.includes("image")) {
    return res.status(400).json({ error: err.message });
  }
  next(err);
});

// Initialize database on cold start (retry on failure so a transient error
// doesn't permanently break every request).
let initialized = false;
let initError = null;

export default async function handler(req, res) {
  if (!initialized) {
    try {
      await initializeDatabase();
      initialized = true;
      initError = null;
    } catch (err) {
      console.error("Database initialization error:", err);
      initError = err.message;
      // Allow retry on the next request instead of failing permanently.
      initialized = false;
    }
  }
  // Health endpoint reports DB status directly without depending on init.
  if (req.url === "/api/health") {
    try {
      await queryAll("SELECT 1");
      return res.json({ status: "ok", database: "postgres", timestamp: new Date().toISOString() });
    } catch (err) {
      return res.status(500).json({ status: "error", message: err?.message || String(err), initError });
    }
  }
  return app(req, res);
}