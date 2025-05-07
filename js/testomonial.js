// Variables
const carousel = document.getElementById('testimonialCarousel');
const cards = document.querySelectorAll('.ts-testimonial-card');
const dots = document.querySelectorAll('.ts-nav-dot');
const cardWidth = cards[0].offsetWidth + 20; // card width + margin
const cardsPerSlide = getCardsPerSlide();
const totalSlides = Math.ceil(cards.length / cardsPerSlide);
let currentSlide = 0;
let autoSlideInterval;

// Initialize carousel
function initCarousel() {
    // Set carousel width based on number of cards
    updateCarouselLayout();

    // Start auto-sliding
    startAutoSlide();

    // Update carousel on window resize
    window.addEventListener('resize', function () {
        updateCarouselLayout();
        goToSlide(0); // Reset to first slide when resizing
    });
}

// Determine cards per slide based on screen width
function getCardsPerSlide() {
    if (window.innerWidth < 768) {
        return 1;
    } else if (window.innerWidth < 992) {
        return 2;
    } else {
        return 3;
    }
}

// Update carousel layout when screen size changes
function updateCarouselLayout() {
    const cardsPerView = getCardsPerSlide();
    cards.forEach(card => {
        if (cardsPerView === 1) {
            card.style.minWidth = 'calc(100% - 20px)';
        } else if (cardsPerView === 2) {
            card.style.minWidth = 'calc(50% - 20px)';
        } else {
            card.style.minWidth = 'calc(33.333% - 20px)';
        }
    });
}

// Move carousel by a certain number of slides
function moveCarousel(direction) {
    // Stop auto sliding when user interacts
    stopAutoSlide();

    // Calculate new slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Update slide
    goToSlide(currentSlide);

    // Restart auto sliding
    startAutoSlide();
}

// Go to a specific slide
function goToSlide(slideIndex) {
    currentSlide = slideIndex;

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });

    // Calculate the offset
    const cardsPerView = getCardsPerSlide();
    const offset = -(currentSlide * cardsPerView * (cardWidth));

    // Apply transform
    carousel.style.transform = `translateX(${offset}px)`;
}

// Start auto sliding
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        if (currentSlide >= totalSlides - 1) {
            goToSlide(0);
        } else {
            moveCarousel(1);
        }
    }, 5000);
}

// Stop auto sliding
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Initialize the carousel on load
window.addEventListener('load', initCarousel);