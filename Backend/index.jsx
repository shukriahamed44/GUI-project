const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to SQLite database
const db = new sqlite3.Database('./database/database.db', (err) => {
  if (err) {
    console.error("Error connecting to SQLite:", err.message);
  } else {
    console.log("Connected to SQLite database.");
  }
});

// Example endpoint: Get all airports from the database
app.get('/airports', (req, res) => {
  db.all('SELECT * FROM airports', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);  // Send the result as JSON
    }
  });
});

// Example endpoint: Get all flights from the database
app.get('/flights', (req, res) => {
  db.all('SELECT * FROM flights', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);  // Send the result as JSON
    }
  });
});

// Add a new flight (POST request example)
app.post('/flights', (req, res) => {
  const { from_airport_id, to_airport_id, price, date, passenger_count } = req.body;
  
  const sql = `INSERT INTO flights (from_airport_id, to_airport_id, price, date, passenger_count)
               VALUES (?, ?, ?, ?, ?)`;
  db.run(sql, [from_airport_id, to_airport_id, price, date, passenger_count], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ id: this.lastID, message: 'Flight added successfully!' });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
