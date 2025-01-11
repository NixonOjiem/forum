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

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});