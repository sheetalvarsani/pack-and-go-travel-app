
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
require('dotenv').config(); // Load environment variables

const { configureCors } = require('./middleware'); // Make sure the middleware is correctly defined and exported
const app = express();
const port = 3001;

// Use middleware
app.use(cors());
app.use(configureCors()); // Assuming configureCors is defined correctly
app.use(express.json());
app.use(bodyParser.json());

// Create a connection to the MySQL database (fill out info in .env file)
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Connect to the database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL database connected');
});

// Middleware to parse JSON data
app.use(express.json());
app.use(bodyParser.json());

// API endpoint for user login
app.post('/login', async (req, res) => {
  let { username, password } = req.body;
  username = username.trim(); // Trim leading and trailing spaces

  console.log('Received login request:', { username, password });

  try {
    // Query the database to check if the username exists
    const query = `SELECT * FROM users WHERE username = ?`;
    db.query(query, [username], async (err, result) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).json({ success: false, message: 'Error querying the database' });
      } else if (result.length > 0) {
        const user = result[0];

        // Log the retrieved user data
        console.log('Retrieved user data from the database:', user);

        // Compare the provided password with the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
          res.status(200).json({ success: true, message: 'Login successful' });
        } else {
          console.log('Password comparison failed');
          res.status(401).json({ success: false, message: 'Invalid username or password' });
        }
      } else {
        console.log('No user found with the provided username');
        res.status(401).json({ success: false, message: 'Invalid username or password' });
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Handle GET request home
app.get('/', (req, res) => {
  // Logic to show home api message /
  res.send('Welcome to the API, it is working and running on localhost 3001');
});


// Handle GET request to /signup (for accessing the signup form)
app.get('/signup', (req, res) => {
  // Your logic to render the signup form or send any relevant data
  res.send('Signup form or data');
});

// API endpoint for user sign-up
// API endpoint for user sign-up
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the username already exists in the database
    const checkQuery = `SELECT * FROM users WHERE username = ?`;
    db.query(checkQuery, [username], async (checkErr, checkResult) => {
      if (checkErr) {
        console.error('Error checking username existence:', checkErr.message);
        res.status(500).send('Error checking username existence');
        return;
      }

      // If username already exists, send an error response
      if (checkResult.length > 0) {
        console.log('Username already exists');
        res.status(400).send('Username already exists');
        return;
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert new user into the database with the hashed password
      const insertQuery = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
      db.query(insertQuery, [username, email, hashedPassword], (insertErr, insertResult) => {
        if (insertErr) {
          console.error('Error signing up:', insertErr.message);
          res.status(500).send('Error signing up');
        } else {
          console.log('Signup successful');
          res.status(201).send('Sign-up successful');
        }
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error hashing password');
  }
});



// API endpoint for user logout (example)
app.get('/logout', (req, res) => {
  // Perform logout actions if needed
  res.status(200).send('Logout successful');
});
// Add this catch-all route at the end
app.get('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});