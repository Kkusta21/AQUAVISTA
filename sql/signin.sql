-- Create the "users" table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Insert sample data into the "users" table
INSERT INTO users (email, password) VALUES
    ('user1@example.com', 'password1'),
    ('user2@example.com', 'password2');
