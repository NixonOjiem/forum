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

//Post questions endpoint
app.post('/add-questions', (req, res) => {
  const {title, question, tag}= req.body;
  const insertIntoQuestionSql = 'INSERT INTO questions (title, question, tag ) VALUES (?,?,?)';

  db.query(insertIntoQuestionSql, [title, question, tag], (err, result) => {
    if (err) {
      return res.status(500).send('Error adding question');
    }
    res.send('Question added successfully');
  });
})

//Endpoint to fetch title for the questions
app.get('/question-list', (req, res) => {
  const sql = 'SELECT question_id, Title FROM questions';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

//Endpoint for each individual question
app.get('/question/:id', (req, res) => {
  const sql = 'SELECT * FROM questions WHERE question_id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

//End point to fetch user.
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const sql = 'SELECT * FROM users WHERE user_id = ?';
  db.query(sql, [userId], (err, results) => {
    if (err) throw err;
    res.json(results[0]); // Assuming you want to return a single user object
  });
});

// Endpoint to fetch comments for a question
app.get('/comments/:question_id', (req, res) => {
  const sql = 'SELECT * FROM comments WHERE question_id = ?';
  db.query(sql, [req.params.question_id], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Endpoint to add a new comment
app.post('/comments', (req, res) => {
  const { question_id, comment } = req.body;
  const sql = 'INSERT INTO comments (question_id, comment) VALUES (?, ?)';
  db.query(sql, [question_id, comment], (err, result) => {
    if (err) throw err;
    res.json({ success: true, comment_id: result.insertId });
  });
});

//EndPoint for fetching trending questions
app.get('/trending-questions', (req, res) => {
  const sql = `
    SELECT q.question_id, q.Title, q.question, q.tag, COUNT(c.comment_id) AS comment_count
    FROM questions q
    LEFT JOIN comments c ON q.question_id = c.question_id
    GROUP BY q.question_id
    ORDER BY comment_count DESC
    LIMIT 10;  -- Adjust the limit as needed
  `;
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/', (req, res) => {
  res.send('Forum DB says Hello');
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});