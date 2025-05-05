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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
