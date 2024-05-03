document.addEventListener('DOMContentLoaded', function () {
    let menuIcon = document.querySelector('.menu-icon');
    let menu = document.querySelector('.menu');
    let body = document.querySelector('body');
    let modoToggle = document.querySelector('.modo-toggle input[type="checkbox"]');
    let lista = document.getElementById('lista');
    let tablas = document.querySelectorAll('.table');
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
    menuIcon.addEventListener('click', function () {
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        } else {
            menu.classList.add('show');
        }
    });

    modoToggle.addEventListener('change', function () {
        if (body.classList.contains('modo-oscuro')) {
            body.classList.remove('modo-oscuro');
        } else {
            body.classList.add('modo-oscuro');
        }
    });


});