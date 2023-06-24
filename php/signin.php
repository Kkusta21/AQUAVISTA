<?php
// Get the JSON data from the request
$data = json_decode(file_get_contents('php://input'), true);

// Extract the values
$email = $data['email'];
$password = $data['password'];

// Database connection settings
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute the SQL query
$stmt = $conn->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
$stmt->bind_param("ss", $email, $password);
$stmt->execute();

// Check if the query was successful
if ($stmt->affected_rows > 0) {
    $response = [
        'status' => 'success',
        'message' => 'User signed in successfully.'
    ];
} else {
    $response = [
        'status' => 'failure',
        'message' => 'Failed to sign in.'
    ];
}

// Close the prepared statement and database connection
$stmt->close();
$conn->close();

// Return the JSON response
header('Content-Type: application/json');
echo json_encode($response);
?>
