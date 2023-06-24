const express = require('express');
const sequelize = require('./db');
const User = require('./models/User');

const app = express();
const port = 3000; // Specify the desired port number

app.use(express.json());

// Define routes
app.post('/signup', async (req, res) => {
  try {
    // Extract data from the request body
    const { username, email, password } = req.body;

    // Create a new user in the database
    const user = await User.create({ username, email, password });

    res.json({ message: 'User signed up successfully' });
  } catch (error) {
    console.error('Error signing up user: ', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
});

// Define other routes as needed

// Sync the database and start the server
(async () => {
  try {
    await sequelize.sync();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();
