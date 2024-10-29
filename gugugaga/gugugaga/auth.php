<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the JSON input
    $inputData = file_get_contents("php://input");
    $credentials = json_decode($inputData, true);

    // Check if 'username' and 'password' are set
    if (isset($credentials['username']) && isset($credentials['password'])) {
        if ($credentials['username'] === 'halo' && $credentials['password'] === 'halo') {
            echo "Login successful!";
        } else {
            echo "Invalid credentials.";
        }
    } else {
        echo "Missing credentials.";
    }
} else {
    echo "Invalid request.";
}
