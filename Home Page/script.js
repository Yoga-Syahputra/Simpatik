// Smooth scrolling for navbar links
document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute('href'); // Get the target ID from href attribute
            const targetSection = document.querySelector(targetId); // Find the target section

            if (targetSection) {
                // Scroll to the target section with smooth behavior
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Toggle category expansion
document.addEventListener('DOMContentLoaded', function() {
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
});

// JavaScript for showing and hiding the pop-up
document.getElementById('show-popup-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});
