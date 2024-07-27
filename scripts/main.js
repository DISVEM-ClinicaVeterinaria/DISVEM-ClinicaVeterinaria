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

    // Inicialización de Swiper
    var swiper = new Swiper('.swiper-container', {
        loop: true, // Habilita el bucle infinito para el carrusel
        autoplay: {
            delay: 3000, // Tiempo en ms antes de cambiar a la siguiente imagen
            disableOnInteraction: false, // Permite que el autoplay siga funcionando después de la interacción
        },
        speed: 1000, // Ajusta la velocidad de transición entre imágenes
        effect: 'slide', // Efecto de transición para el carrusel
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
