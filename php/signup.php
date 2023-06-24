<?php

$data = json_decode(file_get_contents('php://input'), true);


$user = $data['user'];
$email = $data['email'];
$password = $data['password'];


$response = [
    'status' => 'success',
    'message' => 'User signed up successfully.'
];
echo json_encode($response);
?>
