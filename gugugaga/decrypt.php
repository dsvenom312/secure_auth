<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $inputData = file_get_contents('php://input');
    parse_str($inputData, $decodedData);

    if (isset($decodedData['encodedRequest'])) {
        // Decode the Base64 string
        $credentials = json_decode(base64_decode($decodedData['encodedRequest']), true);

        // Validate credentials
        if ($credentials['username'] === 'halo' && $credentials['password'] === 'halo') {
            echo "Login successful!";
        } else {
            echo "Invalid credentials.";
        }
    } else {
        echo "Invalid data.";
    }
} else {
    echo "Invalid request.";
}
