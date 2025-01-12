const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3001;

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test',
  database: 'forum',
  port: 3307 // Use the port number you specified earlier
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the FORUM database');
});

//Signup Endpoint
app.post('/signup', (req, res) => {
  const {first_name, last_name, email, username, password }= req.body;
  const checkSql = 'SELECT * FROM users WHERE username =?';
  db.query(checkSql, [username], (err, results) => {
    if (err) {
      return res.status(500).send('Error checking username');
    }
    if (results.length > 0) {
      return res.status(400).send('Username already exists');
    }
    const insertUserSql = 'INSERT INTO users (first_name, last_name, email, username, password)';
    db.query(insertUserSql, [first_name, last_name, email, username, password], (err, result) => {
      if (err) {
        return res.status(500).send('Error signing up');
      }
      res.send('User registered successfully');
    });
  })
});

app.get('/', (req, res) => {
  res.send('Forum DB says Hello');
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});