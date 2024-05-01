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
        let elemento = event.target.innerText.split(' ').join('');
        let tablaMostrar = document.getElementById('tabla' + elemento);
        if (tablaMostrar) {
            tablaMostrar.classList.remove('oculto');
            tituloTabla.classList.remove('oculto');

            tituloTabla.innerText = 'Mostrando:' + elemento;
        }
    });
    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('show');
    });

    modoToggle.addEventListener('change', function () {
        body.classList.toggle('modo-oscuro');
    });

//ESTE ES LA FUNCION PARA GENERAR EL CAPTCHA
    function generarCaptcha() {
        captcha = Math.floor(Math.random()*90*70*90*5*9);

        // ACA ABAJO LE INDICAMOS AL PARRAFO  POR ID QUE LE ASIGNE EL VALOR DEL CAPTCHA LO DEJO COMENTO
        // YA QUE NO SE QUE ID LE COLOCASTE.
        // document.getElementById("captcha").innerHTML = captcha
    }
    generarCaptcha();
});