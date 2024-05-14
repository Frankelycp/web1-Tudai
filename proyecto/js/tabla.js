document.addEventListener("DOMContentLoaded", function () {
    let tabla = document.querySelector(".tablaProductos");
    let imagenProductos = document.getElementById("imagenProducto");

    tabla.addEventListener("click", function (e) {
        let elementoClicleado = e.target;
        if (elementoClicleado.tagName === "TD" && elementoClicleado.className === "producto") {
            let img = elementoClicleado.innerText;
            imagenProductos.src = "./img/" + img + ".jpg";
            imagenProductos.classList.remove("ocultarImagen");
        } else {
            imagenProductos.classList.add("ocultarImagen");
        }
    });
});