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

    if (!validateEmail(email)) {
        showNotification("Silakan isi alamat email yang valid.");
        return;
    }

    if (!validatePassword(newPassword)) {
        showNotification("Kata sandi harus terdiri dari minimal 8 karakter dan menyertakan angka serta karakter khusus.");
        return;
    }

    if (email && newPassword) {
        showNotification("Reset kata sandi berhasil! Anda sekarang dapat masuk dengan kata sandi baru Anda.");
        setTimeout(function() {
            window.location.href = "/Login Page/login.html";
        }, 2000); // Redirect after 2 seconds
    } else {
        showNotification("Silakan isi semua kolom.");
    }
}

function showNotification(message) {
    var modal = document.getElementById("notificationModal");
    var notificationMessage = document.getElementById("notificationMessage");
    notificationMessage.textContent = message;
    modal.style.display = "flex";
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return re.test(password);
}
