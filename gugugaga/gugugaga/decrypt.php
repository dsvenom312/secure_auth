<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['encodedRequest'])) {
        // Decode the Base64 string
        $requestString = base64_decode($_POST['encodedRequest']);
        $requestData = json_decode($requestString, true);

        // Check if decoding was successful
        if ($requestData) {
            // Prepare data to send to auth.php
            $postData = json_encode($requestData);

            // Initialize cURL session to POST data to auth.php
            $ch = curl_init('http://localhost/gugugaga/auth.php');
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
            curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);

            // Execute cURL and capture response
            $response = curl_exec($ch);
            curl_close($ch);

            echo $response;
        } else {
            echo "Failed to decode data.";
        }
    } else {
        echo "No data received.";
    }
} else {
    echo "Invalid request.";
}
?>
