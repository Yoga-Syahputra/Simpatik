document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.getElementById('signup-form');

    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Fetch input values
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Perform validation
        if (email.trim() === '') {
            alert('Please enter your email.');
            return;
        }

        if (password.trim() === '') {
            alert('Please enter your password.');
            return;
        }

        if (confirmPassword.trim() === '') {
            alert('Please confirm your password.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // If all validations pass, you can submit the form or perform further actions here
        alert('Form submitted successfully!');
        signUpForm.reset(); // Optionally, reset the form after submission
    });
});
