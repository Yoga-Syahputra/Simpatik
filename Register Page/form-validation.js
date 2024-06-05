document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const notificationModal = document.getElementById('notificationModal');
    const notificationMessage = document.getElementById('notificationMessage');
    const closeModalBtn = document.querySelector('.close');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Fetch input values
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Perform validation
        if (!validateEmail(email)) {
            showNotification('Masukkan email yang valid.');
            return;
        }

        if (!validatePassword(password)) {
            showNotification('Kata sandi harus terdiri dari minimal 8 karakter dan menyertakan angka serta karakter khusus.');
            return;
        }

        if (password !== confirmPassword) {
            showNotification('Kata sandi tidak cocok.');
            return;
        }

        // If all validations pass, you can submit the form or perform further actions here
        showNotification('Formulir berhasil dikirimkan!');
        registrationForm.reset(); // Optionally, reset the form after submission
    });

    closeModalBtn.addEventListener('click', closeModal);

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        return re.test(password);
    }

    function showNotification(message) {
        notificationMessage.textContent = message;
        notificationModal.style.display = 'flex';
    }

    function closeModal() {
        notificationModal.style.display = 'none';
    }
});
