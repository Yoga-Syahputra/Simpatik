document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navbar links
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
        newCategory.textContent = 'Category 4';
        categoryGrid.appendChild(newCategory);
    });

    closeBtn.addEventListener('click', function() {
        extraCategories.classList.remove('expanded');
        categoryGrid.removeChild(categoryGrid.lastChild);
        categoryGrid.appendChild(moreBtn);
    });

    // Slider functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    function toggleSlide(index) {
        slides[currentSlide].classList.remove('active');
        toggleButtons[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        toggleButtons[currentSlide].classList.add('active');
    }

    toggleButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            toggleSlide(index);
        });
    });
});
