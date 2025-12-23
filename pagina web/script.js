document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('nav ul');
    // Seleccionamos todos los enlaces dentro del menú
    const navLinks = document.querySelectorAll('nav ul li a');

    if (menuToggle && navMenu) {
        // 1. Abrir/Cerrar menú con el botón de hamburguesa
        menuToggle.addEventListener('click', (e) => {
            e.preventDefault(); 
            navMenu.classList.toggle('active');
            console.log("Menú toggle:", navMenu.classList.contains('active'));
        });

        // 2. NUEVO: Cerrar menú al hacer clic en cualquier enlace
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active'); // Quita la clase active para esconderlo
                console.log("Enlace clicado, cerrando menú.");
            });
        });

    } else {
        console.error("No se encontró el botón o la lista. Revisa los IDs y etiquetas.");
    }
});

