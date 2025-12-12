// Lightbox functionality for image gallery
let currentImageIndex = 0;
let images = [];

document.addEventListener('DOMContentLoaded', function() {
    // Get all gallery images (including cueros and personal images)
    const galleryImages = document.querySelectorAll('.project-gallery img, .cueros-main-image img, .cueros-grid img, .personal-featured img, .personal-grid img');

    // Create lightbox HTML
    const lightboxHTML = `
        <div class="lightbox" id="lightbox">
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <span class="lightbox-prev">&#10094;</span>
                <span class="lightbox-next">&#10095;</span>
                <img class="lightbox-image" id="lightbox-image" src="" alt="">
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);

    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    // Add click event to each image
    galleryImages.forEach((img) => {
        img.addEventListener('click', function() {
            // Get all images from the same section
            const section = this.closest('.project-section');
            const sectionImages = section.querySelectorAll('.project-gallery img, .cueros-main-image img, .cueros-grid img, .personal-featured img, .personal-grid img');
            images = Array.from(sectionImages);

            // Find the index of the clicked image within its section
            currentImageIndex = images.indexOf(this);
            showLightbox();
        });
    });

    // Close lightbox
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Navigation
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'ArrowRight') showNextImage();
    });

    function showLightbox() {
        lightboxImage.src = images[currentImageIndex].src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        lightboxImage.src = images[currentImageIndex].src;
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        lightboxImage.src = images[currentImageIndex].src;
    }
});
