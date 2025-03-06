
CREATE TABLE students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  image TEXT NOT NULL
);

INSERT INTO students (firstName, lastName, phone, email, image) 
VALUES 
('John', 'Doe', '0707-1122323', 'john@doe.com', 'https://placehold.co/100'),
('Jane', 'Doe', '0707-1122323', 'jane@doe.com', 'https://placehold.co/100'),
('Alice', 'Doe', '0707-1122323', 'alice@doe.com', 'https://placehold.co/100'),
('Bob', 'Doe', '0707-1122323', 'bob@doe.com', 'https://placehold.co/100');
