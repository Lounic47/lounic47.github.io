document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el botón por su ID
    const boton = document.getElementById('play2');
    // Añade el evento click
    boton.addEventListener('click', function() {
        // Redirige a la otra página
        window.location.href = "./indexgame.html";        
    });
});