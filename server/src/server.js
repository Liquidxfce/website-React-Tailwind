import express from "express";
import Database from 'better-sqlite3';

const db = new Database('./db/freakyfashion.db', { 
  fileMustExist: true,
  verbose: console.log 
});

const port = 8000;

const app = express();

// GET /api/products
app.get('/api/products', (req, res) => {
  
  const products = db.prepare(`
    SELECT id,
           productName,
           productDescription,
           productImage,
           brand,
           price
      FROM products
  `).all();

  res.json(products);
});

// POST /api/products
app.post("/api/products", (req, res) => {

  const product = { ...req.body };

  const insert = db.prepare(`
    INSERT INTO products (
      productName, 
      productDescription, 
      productImage, 
      brand, 
      price
    ) VALUES (
      @productName, 
      @productDescription, 
      @productImage, 
      @brand, 
      @price
    )`);
  
    const result = insert.run(product);
  
    // Returnera statuskod 201
    res.status(201).json({ id: result.lastInsertRowid, ...product });

  res.send();
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
