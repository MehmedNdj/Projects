const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, '../database/UCare_sample.db');

const fs = require('fs');

console.log('Resolved DB path:', dbPath);
console.log('File exists:', fs.existsSync(dbPath));

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the database.');
  }
});

app.get('/api/prescriptions', (req, res) => {
  const query = 'SELECT * FROM prescriptions';

  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('Error retrieving prescriptions:', err.message);
      res.status(500).json({ error: 'Failed to retrieve prescriptions' });
    } else {
      res.json(rows);
    }
  });
});

app.get('/api/allergies', (req, res) => {
  db.all('SELECT * FROM allergies', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.get('/api/vaccines', (req, res) => {
  db.all('SELECT * FROM vaccines', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.get('/api/labresults', (req, res) => {
  db.all('SELECT * FROM lab_results', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.get('/api/illnesses', (req, res) => {
  db.all('SELECT * FROM illnesses', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.get('/api/hospitalstays', (req, res) => {
  db.all('SELECT * FROM hospital_stays', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
