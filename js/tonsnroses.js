document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    let currentIndex = 0;

    // Safety check to ensure carousel elements exist on the current page
    if (slides.length === 0 || !nextBtn || !prevBtn) return;

    function showSlide(index) {
        // Remove active class from current image
        slides[currentIndex].classList.remove('active');
        
        // Calculate new index boundary bounds
        currentIndex = (index + slides.length) % slides.length;
        
        // Add active class to new image
        slides[currentIndex].classList.add('active');
    }

    // Event Listeners for Clicking Buttons
    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    // Optional: Auto-play functionality (swaps image every 5 seconds)
    setInterval(() => {
         showSlide(currentIndex + 1);
     }, 5000);
});