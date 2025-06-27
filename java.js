// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el botón por su ID
    const boton = document.getElementById('mi-boton');
    // Añade el evento click
    boton.addEventListener('click', function() {
        // Redirige a la otra página
        window.location.href = "./index2.html";        
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el botón por su ID
    const boton = document.getElementById('XD');
    // Añade el evento click
    boton.addEventListener('click', function() {
        // Redirige a la otra página
        window.location.href = "./Troll/index.html";        
    });
});
