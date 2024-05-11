document.addEventListener('DOMContentLoaded', function () {
    let body = document.querySelector('body');
    let modoToggle = document.querySelector('.modo-toggle input[type="checkbox"]');
    let menuIcon = document.querySelector('.menu-icon');
    let menu = document.querySelector('.menu');
    let tabla = document.querySelector('.tablaProductos');

    let imagenProductos = document.getElementById("imagenProducto")

    tabla.addEventListener("click", function(e) {
        let elementoClicleado = e.target;
        if (elementoClicleado.tagName === "TD" &&  elementoClicleado.className === "producto") {
            let img = elementoClicleado.innerText;
            if (imagenProductos.classList.contains('ocultarImagen')) {
                imagenProductos.classList.remove('ocultarImagen');
            } else {
                imagenProductos.classList.add('ocultarImagen');
            }
            imagenProductos.src = "./img/" + img + ".jpg";
        }

    });



});