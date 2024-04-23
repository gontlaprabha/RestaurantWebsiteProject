<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve user input
    $loginUsername = $_POST["login-username"];
    $loginPassword = $_POST["login-password"];

    // Check if the username and password match a stored user
    $userData = json_decode(file_get_contents('user_data.json'), true);

    if ($userData[$loginUsername] && $userData[$loginUsername]["password"] === $loginPassword) {
        // Redirect to the next page after successful login
        header("Location: index.html"); // Replace "index.html" with the actual page you want to redirect to
        exit();
    } else {
        echo "Invalid username or password.";
    }
}
?>
