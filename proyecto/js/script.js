document.addEventListener('DOMContentLoaded', function () {
    let menuIcon = document.querySelector('.menu-icon');
    let menu = document.querySelector('.menu');
    let body = document.querySelector('body');
    let modoToggle = document.querySelector('.modo-toggle input[type="checkbox"]');


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