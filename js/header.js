

document.addEventListener('DOMContentLoaded', function () {
    // Menu toggle functionality
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const navbar = document.getElementById('navbar');

    menuToggle.addEventListener('click', function () {
        navbar.classList.add('active');
    });

    closeMenu.addEventListener('click', function () {
        navbar.classList.remove('active');
    });

    // Mobile dropdown functionality
    const dropdownLinks = document.querySelectorAll('.dropdown > a');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                this.classList.toggle('active');

                // Close other open dropdowns
                dropdownLinks.forEach(otherLink => {
                    if (otherLink !== link && otherLink.classList.contains('active')) {
                        otherLink.classList.remove('active');
                    }
                });
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 1024 &&
            navbar.classList.contains('active') &&
            !navbar.contains(e.target) &&
            e.target !== menuToggle) {
            navbar.classList.remove('active');
        }
    });

    // Reset on resize
    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) {
            navbar.classList.remove('active');
            dropdownLinks.forEach(link => {
                link.classList.remove('active');
            });
        }
    });
});
