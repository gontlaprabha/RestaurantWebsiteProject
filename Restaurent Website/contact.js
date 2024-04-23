
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector('.contact-form-box form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission behavior.

        // Collect form data.
        const formData = new FormData(contactForm);

        // Send the form data to the server-side script.
        fetch('contact_form_handler.php', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Message sent successfully!');
                contactForm.reset(); // Reset the form.
            } else {
                alert('Message failed to send. Please try again.');
            }
        })
        .catch(error => {
            console.error(error);
            alert('An error occurred. Please try again.');
        });
    });
});
