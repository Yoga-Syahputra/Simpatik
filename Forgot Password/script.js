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

function toggleNewPasswordVisibility() {
    var passwordField = document.getElementById("new-password");
    var togglePassword = document.getElementById("toggle-new-password");
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

function resetPassword() {
    var email = document.getElementById("email").value;
    var newPassword = document.getElementById("new-password").value;

    // Placeholder for password reset logic
    if (email && newPassword) {
        showNotification("Password reset successful! You can now log in with your new password.");
        setTimeout(function() {
            window.location.href = "login.html";
        }, 2000); // Redirect after 2 seconds
    } else {
        showNotification("Please fill out all fields.");
    }
}

function showNotification(message) {
    var modal = document.getElementById("notificationModal");
    var notificationMessage = document.getElementById("notificationMessage");
    notificationMessage.textContent = message;
    modal.style.display = "flex";
}
