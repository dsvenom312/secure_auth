function submitLoginForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Create the full HTTP request as a string
    const requestString = `POST /gugugaga/decrypt.php HTTP/1.1
Host: localhost
Cookie: gugugaga=acb71bf633fdec415e959ba7be5f4a07; PHPSESSID=vo8ra0bm7ovp6fcgs7ie7fskvg
Content-Length: 71
Sec-Ch-Ua-Platform: "Windows"
Accept-Language: en-US,en;q=0.9
Sec-Ch-Ua: "Not?A_Brand";v="99", "Chromium";v="130"
Content-Type: application/x-www-form-urlencoded
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6723.59 Safari/537.36
Accept: */*
Origin: https://localhost
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://localhost/gugugaga/login.html
Accept-Encoding: gzip, deflate, br
Priority: u=1, i
Connection: keep-alive

encodedRequest=${btoa(JSON.stringify({ username, password }))}`;

    // Encode the entire request in Base64
    const encodedRequest = btoa(requestString);

    // Send the encoded request to secureDec.php using POST
    fetch('secureDec.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `encodedRequest=${encodeURIComponent(encodedRequest)}`
    })
    .then(response => {
        console.log(`Status Code: ${response.status}`);
        return response.text();
    })
    .then(data => console.log(`Response Body: ${data}`))
    .catch(error => console.error('Error:', error));
}
