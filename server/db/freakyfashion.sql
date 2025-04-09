
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  productName TEXT NOT NULL,
  productDescription TEXT NOT NULL,
  productImage TEXT NOT NULL,
  brand TEXT NOT NULL,
  sku TEXT NOT NULL,
  price TEXT NOT NULL
);

INSERT INTO products (productName, productDescription, productImage, brand, sku, price) 
VALUES 
('Svart t-shirt', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, omnis.', 'https://placehold.co/400x600/png', 'Levis', '222222','199 SEK'),
('Vit t-shirt', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, omnis.', 'https://placehold.co/400x600/png', 'Levis', '222222','199 SEK'),
('Blå t-shirt', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, omnis.', 'https://placehold.co/400x600/png', 'Levis', '222222','199 SEK'),
('Grå t-shirt', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, omnis.', 'https://placehold.co/400x600/png', 'Levis', '222222','199 SEK');
