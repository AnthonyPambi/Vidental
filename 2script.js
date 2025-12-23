document.addEventListener('DOMContentLoaded', () => {
    const titulos = document.querySelectorAll('.titulo-desplegable');

    if (titulos.length === 0) {
        console.error("¡Error! No se encontraron elementos con la clase '.titulo-desplegable'. Revisa tu HTML.");
    }

    titulos.forEach(titulo => {
        titulo.addEventListener('click', () => {
            const padre = titulo.closest('.categoria-servicio'); // Busca el padre más cercano
            
            if (padre) {
                padre.classList.toggle('abierto');
                console.log("Categoría abierta/cerrada con éxito");
            } else {
                console.error("No se encontró el contenedor '.categoria-servicio' alrededor del título.");
            }
        });
    });
});