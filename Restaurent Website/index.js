// script.js

// Function to display a greeting message
function displayGreeting() {
    alert("Welcome to Spicy Kingdom! Enjoy your meal.");
}

// Function to handle form submission
function handleSubmitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // You can add your form handling logic here, such as sending data to a server.
    // For now, we'll just display a success message.
    alert("Your reservation has been submitted. We will contact you shortly.");
}

