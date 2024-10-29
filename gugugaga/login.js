function submitLoginForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Properly format the HTTP request string with \r\n for new lines and \r\n\r\n between headers and body
    const requestString = `POST /gugugaga/decrypt.php HTTP/1.1\r\n` +
        `Host: localhost\r\n` +
        `Cookie: gugugaga=acb71bf633fdec415e959ba7be5f4a07; PHPSESSID=vo8ra0bm7ovp6fcgs7ie7fskvg\r\n` +
        `Content-Length: 71\r\n` +
        `Sec-Ch-Ua-Platform: "Windows"\r\n` +
        `Accept-Language: en-US,en;q=0.9\r\n` +
        `Sec-Ch-Ua: "Not?A_Brand";v="99", "Chromium";v="130"\r\n` +
        `Content-Type: application/x-www-form-urlencoded\r\n` +
        `Sec-Ch-Ua-Mobile: ?0\r\n` +
        `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6723.59 Safari/537.36\r\n` +
        `Accept: */*\r\n` +
        `Origin: https://localhost\r\n` +
        `Sec-Fetch-Site: same-origin\r\n` +
        `Sec-Fetch-Mode: cors\r\n` +
        `Sec-Fetch-Dest: empty\r\n` +
        `Referer: https://localhost/gugugaga/login.html\r\n` +
        `Accept-Encoding: gzip, deflate, br\r\n` +
        `Priority: u=1, i\r\n` +
        `Connection: keep-alive\r\n\r\n` +
        `encodedRequest=${btoa(JSON.stringify({ username, password }))}`;

    // Encode the entire request in Base64
    const encodedRequest = btoa(requestString);

    // Send the encoded request to secureDec.php using POST with CORS
    fetch('secureDec.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `encodedRequest=${encodeURIComponent(encodedRequest)}`,
        mode: 'cors'
    })
    .then(response => {
        console.log(`Status Code: ${response.status}`);
        return response.text();
    })
    .then(data => console.log(`Response Body: ${data}`))
    .catch(error => console.error('Error:', error));
}
