import { sql } from "@vercel/postgres";

// @vercel/postgres reads POSTGRES_URL automatically. If the variable is absent
// the SDK throws `missing_connection_string`. We surface a clear message and
// ensure SSL is enabled (required by Vercel Postgres / Neon serverless pools).
if (!process.env.POSTGRES_URL) {
  console.error(
    "POSTGRES_URL is not set. Add it to Vercel Project Environment Variables (all environments)."
  );
}

/**
 * PostgreSQL database adapter for King Perfumes
 * Compatible with the latest @vercel/postgres
 */

// Execute a SELECT query and return all rows
export async function queryAll(queryText, params = []) {
  const result = await sql.query(queryText, params);
  return result.rows;
}

// Execute a SELECT query and return the first row
export async function queryOne(queryText, params = []) {
  const rows = await queryAll(queryText, params);
  return rows.length ? rows[0] : null;
}

// Execute INSERT / UPDATE / DELETE / DDL
export async function runQuery(queryText, params = []) {
  return await sql.query(queryText, params);
}

/**
 * Initialize database
 */
export async function initializeDatabase() {
  try {
    await sql.query(`
      CREATE TABLE IF NOT EXISTS products (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,
        category VARCHAR(100) NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        original_price DECIMAL(10,2) DEFAULT NULL,
        description TEXT NOT NULL,
        notes TEXT DEFAULT '',
        top_notes VARCHAR(500) DEFAULT '',
        middle_notes VARCHAR(500) DEFAULT '',
        base_notes VARCHAR(500) DEFAULT '',
        how_to_use TEXT DEFAULT '',
        images JSON NOT NULL DEFAULT '[]',
        sizes JSON NOT NULL DEFAULT '[]',
        gender VARCHAR(50) DEFAULT 'Unisex',
        stock INT NOT NULL DEFAULT 0,
        rating DECIMAL(3,1) DEFAULT 0,
        review_count INT DEFAULT 0,
        badge VARCHAR(50),
        status VARCHAR(20) DEFAULT 'active',
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);

    await sql.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id VARCHAR(100) PRIMARY KEY,
        customer_name VARCHAR(255) NOT NULL,
        customer_email VARCHAR(255) NOT NULL,
        customer_phone VARCHAR(50) NOT NULL,
        address TEXT NOT NULL,
        city VARCHAR(100) NOT NULL,
        state VARCHAR(100) NOT NULL,
        pincode VARCHAR(20) NOT NULL,
        subtotal DECIMAL(10,2) NOT NULL,
        shipping DECIMAL(10,2) DEFAULT 0,
        total DECIMAL(10,2) NOT NULL,
        payment_method VARCHAR(50) NOT NULL,
        payment_status VARCHAR(50) DEFAULT 'pending',
        razorpay_order_id VARCHAR(100),
        razorpay_payment_id VARCHAR(100),
        order_status VARCHAR(50) DEFAULT 'Processing',
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);

    await sql.query(`
      CREATE TABLE IF NOT EXISTS order_items (
        id VARCHAR(100) PRIMARY KEY,
        order_id VARCHAR(100) NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
        product_id VARCHAR(100) NOT NULL,
        product_name VARCHAR(255) NOT NULL,
        size VARCHAR(50) NOT NULL,
        quantity INT NOT NULL,
        price DECIMAL(10,2) NOT NULL
      );
    `);

    await sql.query(`
      CREATE TABLE IF NOT EXISTS categories (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE,
        slug VARCHAR(255) NOT NULL UNIQUE,
        image VARCHAR(500) DEFAULT '',
        description TEXT DEFAULT '',
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);

    await sql.query(`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(500) DEFAULT '',
        message TEXT NOT NULL,
        is_read SMALLINT DEFAULT 0,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);

    await sql.query(`
      CREATE TABLE IF NOT EXISTS settings (
        setting_key VARCHAR(100) PRIMARY KEY,
        setting_value TEXT NOT NULL,
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);

    await sql.query(`
      INSERT INTO settings (setting_key, setting_value)
      VALUES ('cod_percentage', '0')
      ON CONFLICT (setting_key) DO NOTHING;
    `);

    console.log("✅ PostgreSQL tables initialized successfully");
  } catch (error) {
    console.error("Database initialization error:", error);
    throw error;
  }
}

export default {
  queryAll,
  queryOne,
  runQuery,
  initializeDatabase,
};