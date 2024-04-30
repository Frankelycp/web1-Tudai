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
        if (body.classList.contains('modo-oscuro')) {
            localStorage.setItem('modo-preferido', 'oscuro');
        } else {
            localStorage.setItem('modo-preferido', 'claro');
        }
    });
});