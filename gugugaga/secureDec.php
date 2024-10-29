<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

echo "Step 1: Start\n";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo "Step 2: POST request received\n";

    if (isset($_POST['encodedRequest'])) {
        echo "Step 3: Encoded request received\n";
        
        // Decode the Base64 string
        $rawRequest = base64_decode($_POST['encodedRequest']);
        
        // Check if decoding was successful
        if ($rawRequest === false) {
            echo "Error: Failed to decode Base64 request.\n";
            exit;
        }

        echo "Step 4: Decoded Base64 request\n";
        echo "Decoded Request:\n" . htmlentities($rawRequest) . "\n";
    } else {
        echo "Error: 'encodedRequest' not found in POST data.\n";
    }
} else {
    echo "Error: Invalid request method. Expected POST.\n";
}
