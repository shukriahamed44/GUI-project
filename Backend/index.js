const path = require('path');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

console.log("1. Starting server...");
// Enhanced CORS configuration
app.use(cors({
  origin: 'http://localhost:5173', // Vite's default port
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(bodyParser.json());

// Database connection
console.log("2. Connecting to database...");

const dbPath = path.join(__dirname, 'databaseFolder', 'airports.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error connecting to SQLite:", err.message);
  } else {
    console.log("Connected to SQLite database.");
  }
});

// Inside the database connection callback
db.serialize(() => {
  // Create tables
  db.run(`
    CREATE TABLE IF NOT EXISTS AirportsList (
      airport_id INTEGER PRIMARY KEY AUTOINCREMENT,
      airport_Name TEXT NOT NULL UNIQUE
    )`, (err) => {
      if (err) console.error("AirportsList creation error:", err.message);
      else console.log("AirportsList table verified/created");
    });

  db.run(`
    CREATE TABLE IF NOT EXISTS flights (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      from_airport_id INTEGER NOT NULL,
      to_airport_id INTEGER NOT NULL,
      price REAL NOT NULL,
      date TEXT NOT NULL,
      passenger_count INTEGER NOT NULL,
      FOREIGN KEY(from_airport_id) REFERENCES AirportsList(airport_id),
      FOREIGN KEY(to_airport_id) REFERENCES AirportsList(airport_id)
    )`, (err) => {
      if (err) console.error("Flights table creation error:", err.message);
      else console.log("Flights table verified/created");
    });

  // Insert sample airports if table is empty
  db.get("SELECT COUNT(*) AS count FROM AirportsList", (err, row) => {
    if (err) return console.error("Count error:", err.message);
    
    if (row.count === 0) {
      db.run(`
        INSERT INTO AirportsList (airport_Name)
        VALUES 
          ('John F. Kennedy International Airport'),
          ('Heathrow Airport'),
          ('Dubai International Airport'),
          ('Changi Airport'),
          ('Los Angeles International Airport')
      `, (err) => {
        if (err) console.error("Sample data error:", err.message);
        else console.log("Inserted 5 sample airports");
      });
    }
  });
});


console.log("3. Database connected");

// API Endpoints
app.get('/test', (req, res) => {
  res.json({ message: "Server is working!" });
});

app.get('/airports', (req, res) => {
  const query = 'SELECT airport_id, airport_Name FROM AirportsList';
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error("Database error:", err);
      res.status(500).json({ error: 'Failed to fetch airports' });
    } else {
      res.json(rows);
    }
  });
});

app.get('/flights', (req, res) => {
  db.all('SELECT * FROM flights', [], (err, rows) => {
    if (err) {
      console.error("Database error:", err);
      res.status(500).json({ error: 'Failed to fetch flights' });
    } else {
      res.json(rows);
    }
  });
});

app.post('/flights', (req, res) => {
  const requiredFields = ['from_airport_id', 'to_airport_id', 'price', 'date', 'passenger_count'];
  const missingFields = requiredFields.filter(field => !req.body[field]);

  if (missingFields.length > 0) {
    return res.status(400).json({ 
      error: `Missing required fields: ${missingFields.join(', ')}`
    });
  }

  const { from_airport_id, to_airport_id, price, date, passenger_count } = req.body;
  const sql = `INSERT INTO flights (from_airport_id, to_airport_id, price, date, passenger_count)
               VALUES (?, ?, ?, ?, ?)`;

  db.run(sql, [from_airport_id, to_airport_id, price, date, passenger_count], function(err) {
    if (err) {
      console.error("Database error:", err);
      res.status(500).json({ error: 'Failed to create flight' });
    } else {
      res.status(201).json({ 
        id: this.lastID, 
        message: 'Flight added successfully!',
        flight: req.body
      });
    }
  });
});

/*
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});*/

console.log("4. Starting server listener");
app.listen(PORT, '0.0.0.0', () => {  // ← Change here
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});