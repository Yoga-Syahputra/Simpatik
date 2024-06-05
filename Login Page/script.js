// Ensure the modal is hidden by default
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("notificationModal");
    modal.style.display = "none";
});

function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var togglePassword = document.getElementById("toggle-password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePassword.innerHTML = '<i class="material-icons">visibility_off</i>';
    } else {
        passwordField.type = "password";
        togglePassword.innerHTML = '<i class="material-icons">visibility</i>';
    }
}

function closeModal() {
    var modal = document.getElementById("notificationModal");
    modal.style.display = "none";
}

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Replace with your actual username and password for testing
    var validEmail = "test@example.com";
    var validPassword = "password123";

    if (email === validEmail && password === validPassword) {
        showNotification("Selamat datang di Simpatik!");
        setTimeout(function() {
            window.location.href = "/Home Page/home.html";
        }, 2000); // Redirect after 2 seconds
    } else {
        showNotification("Alamat Email atau Kata Sandi salah. Mohon coba lagi.");
    }
}

function showNotification(message) {
    var modal = document.getElementById("notificationModal");
    var notificationMessage = document.getElementById("notificationMessage");
    notificationMessage.textContent = message;
    modal.style.display = "flex";
}
