// Fix for scroll animation and mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navMenu = document.querySelector('nav ul');
    const menuIcon = document.querySelector('.menu-icon');

    // Add scroll event listener
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY + window.innerHeight;
        sections.forEach(function (section) {
            // Check if the section is in the viewport
            if (section.getBoundingClientRect().top < window.innerHeight && section.getBoundingClientRect().bottom >= 0) {
                section.classList.add('active');
            } else {
                section.classList.remove('active'); // Remove active class if not in view
            }
        });
    });

    // Toggle navigation menu for mobile view
    if (menuIcon) { // Check if menuIcon exists
        menuIcon.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });
    }
});

// Form validation
document.getElementById("contact-form").addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Validate form fields
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        event.preventDefault(); // Prevent form submission
    } else if (!emailRegex.test(email)) {
        alert("Please enter a valid email.");
        event.preventDefault(); // Prevent form submission
    }
});
