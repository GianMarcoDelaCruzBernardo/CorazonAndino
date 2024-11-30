document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Menú Desplegable (Hamburger Menu)
    const menuIcon = document.querySelector('.icon-container .fa-bars');
    const menu = document.getElementById('navbar-menu');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('active'); // Alternar visibilidad del menú
    });

    // 2. Interacción con las imágenes de las tarjetas
    const imageCards = document.querySelectorAll('.image-card');

    imageCards.forEach(card => {
        card.addEventListener('click', function() {
            const description = this.nextElementSibling; // <p> debajo de la imagen
            description.classList.toggle('active'); // Alternar visibilidad de la descripción
        });
    });

    // 3. Animación al hacer Scroll en las tarjetas
    const cards = document.querySelectorAll('.about-card');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    cards.forEach(card => observer.observe(card));

});
const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
});