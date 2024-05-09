document.addEventListener('DOMContentLoaded', function () {
    let lista = document.getElementById('lista');
    let tablas = document.querySelectorAll('.tablas');
    let tituloTabla = document.getElementById('tituloTabla');

    lista.addEventListener('click', function(event) {
        tituloTabla.classList.add('oculto');

        for (let i = 0; i < tablas.length; i++) {
            tablas[i].classList.add('oculto');
        }
        let elemento = event.target.innerHTML;
        let tablaMostrar = document.getElementById('tabla' + elemento);
        if (tablaMostrar) {
            tablaMostrar.classList.remove('oculto');
            tituloTabla.classList.remove('oculto');
            tituloTabla.innerText = 'Mostrando:' + elemento;
        }
    });
    
});