// Include encoding function from enc.js
function submitLoginForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    const requestData = JSON.stringify({ username, password });
    const encodedRequest = encodeRequest(requestData);

    // Use XMLHttpRequest to send the encoded request to decrypt.php
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "decrypt.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText); // Check response from decrypt.php
        }
    };
    xhr.send("encodedRequest=" + encodeURIComponent(encodedRequest));
}
