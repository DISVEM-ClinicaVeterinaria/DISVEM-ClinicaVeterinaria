document.addEventListener('DOMContentLoaded', function() {
    // JavaScript para desplazamiento suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const galleryGrid = document.querySelector('.gallery-grid');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');
    
    galleryGrid.addEventListener('click', (e) => {
      if (e.target.tagName === 'IMG') {
        const imgSrc = e.target.src;
        lightboxImg.src = imgSrc;
        lightbox.style.display = 'block';
      }
    });

    galleryGrid.addEventListener('touchend', (e) => {
      if (e.target.tagName === 'IMG') {
        const imgSrc = e.target.src;
        lightboxImg.src = imgSrc;
        lightbox.style.display = 'block';
      }
    });
    
    lightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
});
