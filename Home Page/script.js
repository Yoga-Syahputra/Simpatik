// Ensure the modal is hidden by default
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("notificationModal");
    modal.style.display = "none";
});

// Check if the user is authenticated (replace this with your authentication logic)
var isAuthenticated = true; // Set this to true if the user is authenticated, false otherwise

// Function to add user profile HTML
function addUserProfile() {
    var userProfileContainer = document.getElementById("user-profile");
    userProfileContainer.innerHTML = `
        <span id="greeting">Welcome, User!</span>
        <img src="user-avatar.png" alt="User Avatar" class="avatar">
        <div class="dropdown">
            <span class="material-icons">expand_more</span>
            <div class="dropdown-content">
                <a href="#">Profile</a>
                <a href="#">Settings</a>
                <a href="#">Logout</a>
            </div>
        </div>
    `;
}

// Function to add login and sign-up buttons HTML
function addAuthButtons() {
    var authButtonsContainer = document.getElementById("auth-buttons");
    authButtonsContainer.innerHTML = `
        <a href="/Login Page/login.html">Login</a>
        <a href="/Register Page/Signup.html">Sign Up</a>
    `;
}

// Execute code when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Check if the user is authenticated
    if (isAuthenticated) {
        // User is authenticated, show user profile
        addUserProfile();
    } else {
        // User is not authenticated, show login and sign-up buttons
        addAuthButtons();
    }

    // Smooth scrolling for navbar links
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href'); // Get the target ID from href attribute
            const targetSection = document.querySelector(targetId); // Find the target section
            if (targetSection) {
                // Scroll to the target section with smooth behavior
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Toggle category expansion
    const moreBtn = document.querySelector('.more');
    const closeBtn = document.querySelector('.close-btn');
    const categoryGrid = document.querySelector('.category-grid');
    const extraCategories = document.querySelector('.extra-categories');

    moreBtn.addEventListener('click', function() {
        extraCategories.classList.add('expanded');
        categoryGrid.removeChild(moreBtn);
        const newCategory = document.createElement('div');
        newCategory.classList.add('category-item');
        newCategory.textContent = 'Sejarah';
        categoryGrid.appendChild(newCategory);
    });

    closeBtn.addEventListener('click', function() {
        extraCategories.classList.remove('expanded');
        categoryGrid.removeChild(categoryGrid.lastChild);
        categoryGrid.appendChild(moreBtn);
    });

    // JavaScript for showing and hiding the pop-up
    document.getElementById('show-popup-btn').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'block';
    });

    document.getElementById('close-btn').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
    });
});
