// script.js

// Efecto de desplazamiento suave al hacer clic en enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Ajusta el desplazamiento si tienes una barra de navegación fija
                behavior: 'smooth'
            });
        }
    });
});


const menuToggle = document.querySelectorAll('.menu-toggle');
const navContainer = document.querySelectorAll('.nav-container')

