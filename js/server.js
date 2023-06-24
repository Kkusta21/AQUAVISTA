const express = require('express');
const { Pool } = require('pg');
const User = require('./User');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('./db');

const app = express();

const pool = new Pool({
  user: 'aquavista',
  host: 'localhost',
  database: 'login',
  password: '1234567',
  port: 5432,
});

app.get('/', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM your_table');
    const data = result.rows;
    client.release();

    res.json(data);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Get DOM elements
const signInButton = document.getElementById("signIn");
const signUpButton = document.getElementById("signUp");
const container = document.querySelector(".container");

// Add event listeners to toggle between sign-in and sign-up forms
signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

// Handle form submission
const signupForm = document.getElementById("signupForm");
const signinForm = document.getElementById("signinForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = document.getElementById("signupUser").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  // Perform sign-up logic here
  // You can use AJAX or fetch to send the data to the server
});

signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signinEmail").value;
  const password = document.getElementById("signinPassword").value;
  // Perform sign-in logic here
  // You can use AJAX or fetch to send the data to the server
});

class UserModel extends Model {
  // User model definition
}

UserModel.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  }
);

module.exports = UserModel;
