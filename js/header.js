document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const navbar = document.querySelector('.navbar');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navbar.classList.add('active');
        });
    }
    
    if (closeMenu) {
        closeMenu.addEventListener('click', function() {
            navbar.classList.remove('active');
        });
    }
    
    // Mobile dropdown functionality (tap to open/close)
    const dropdownLinks = document.querySelectorAll('.dropdown > a');
    
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                this.classList.toggle('active');
                
                // Check if submenu is visible after toggle
                const submenu = this.nextElementSibling;
                if (submenu) {
                    if (this.classList.contains('active')) {
                        submenu.style.display = 'block';
                    } else {
                        submenu.style.display = 'none';
                    }
                }
                
                // Close other open dropdowns
                dropdownLinks.forEach(otherLink => {
                    if (otherLink !== link) {
                        otherLink.classList.remove('active');
                        const otherSubmenu = otherLink.nextElementSibling;
                        if (otherSubmenu) {
                            otherSubmenu.style.display = 'none';
                        }
                    }
                });
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024 && 
            navbar.classList.contains('active') && 
            !navbar.contains(e.target) && 
            e.target !== menuToggle) {
            navbar.classList.remove('active');
        }
    });
    
    // Close mobile menu on window resize (if screen becomes larger)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            navbar.classList.remove('active');
            dropdownLinks.forEach(link => {
                link.classList.remove('active');
                const submenu = link.nextElementSibling;
                if (submenu) {
                    submenu.style.display = '';
                }
            });
        }
    });
});