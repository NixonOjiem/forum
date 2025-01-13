const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

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
    const insertUserSql = 'INSERT INTO users (first_name, last_name, email, username, password) VALUES (?,?,?,?,?)';
    db.query(insertUserSql, [first_name, last_name, email, username, password], (err, result) => {
      if (err) {
        return res.status(500).send('Error signing up');
      }
      res.send('User registered successfully');
    });
  })
});


//Sign in end point
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // SQL query to check for the user
  const checkSql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  
  db.query(checkSql, [username, password], (err, results) => {
    if (err) {
      // Handle database error
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    // Check if user exists
    if (results.length > 0) {
      // User found, you can send back user data or a success message
      const user = results[0]; // Assuming you want to return the first user found
      return res.status(200).json({ message: 'Sign in successful', userId: user.user_id, username: user.username });
    } else {
      // User not found or incorrect credentials
      return res.status(401).json({ message: 'Invalid username or password' });
    }
  });
});

app.get('/', (req, res) => {
  res.send('Forum DB says Hello');
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});