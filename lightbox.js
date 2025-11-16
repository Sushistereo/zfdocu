// Lightbox functionality for gallery images
// Click on image to expand, click anywhere to close

class Lightbox {
    constructor() {
        this.createLightbox();
        this.attachEventListeners();
    }

    createLightbox() {
        // Create lightbox overlay
        const overlay = document.createElement('div');
        overlay.className = 'lightbox-overlay';
        overlay.id = 'lightbox';

        // Create close button
        const closeBtn = document.createElement('span');
        closeBtn.className = 'lightbox-close';
        closeBtn.innerHTML = '×';

        // Create image element
        const img = document.createElement('img');
        img.className = 'lightbox-image';
        img.alt = 'Expanded view';

        // Append elements
        overlay.appendChild(closeBtn);
        overlay.appendChild(img);
        document.body.appendChild(overlay);

        this.overlay = overlay;
        this.image = img;
    }

    attachEventListeners() {
        // Add click listeners to all gallery images
        const galleryImages = document.querySelectorAll('.scroll-content img');

        galleryImages.forEach(img => {
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                this.open(img.src, img.alt);
            });
        });

        // Close lightbox when clicking on overlay (anywhere)
        this.overlay.addEventListener('click', () => {
            this.close();
        });

        // Prevent closing when clicking on the image itself
        this.image.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.close();
            }
        });
    }

    open(src, alt) {
        this.image.src = src;
        this.image.alt = alt;

        // Add active class with slight delay for animation
        setTimeout(() => {
            this.overlay.classList.add('active');
            document.body.classList.add('lightbox-open');
        }, 10);
    }

    close() {
        this.overlay.classList.remove('active');
        document.body.classList.remove('lightbox-open');
    }
}

// Initialize lightbox when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    new Lightbox();
});
