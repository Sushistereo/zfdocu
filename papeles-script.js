// Papeles Gallery Script
// Handles pause on individual image hover and smooth scrolling behavior

document.addEventListener('DOMContentLoaded', function() {
    const scrollRows = document.querySelectorAll('.scroll-row');

    scrollRows.forEach(row => {
        const images = row.querySelectorAll('img');
        const scrollContent = row.querySelector('.scroll-content');

        images.forEach(img => {
            // Pause animation when hovering over individual images
            img.addEventListener('mouseenter', function() {
                scrollContent.style.animationPlayState = 'paused';
            });

            // Resume animation when mouse leaves the image
            img.addEventListener('mouseleave', function() {
                // Only resume if mouse is not over the scroll row
                if (!row.matches(':hover')) {
                    scrollContent.style.animationPlayState = 'running';
                }
            });
        });

        // Additional control for the row itself
        row.addEventListener('mouseleave', function() {
            scrollContent.style.animationPlayState = 'running';
        });
    });

    // Optional: Add click functionality to view images in larger size
    const allImages = document.querySelectorAll('.scroll-content img');

    allImages.forEach(img => {
        img.addEventListener('click', function() {
            // You can add a lightbox or modal functionality here if desired
            console.log('Image clicked:', this.src);
        });
    });
});
