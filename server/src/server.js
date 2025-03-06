import express from "express";
import Database from 'better-sqlite3';

const db = new Database('./db/student-manager.db', { 
  verbose: console.log 
});

const port = 8000;

const app = express();

// GET /api/students
app.get('/api/students', (req, res) => {
  
  const students = db.prepare(`
    SELECT id,
           firstName,
           lastName,
           email,
           phone,
           image
      FROM students
  `).all();

  res.json(students);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
