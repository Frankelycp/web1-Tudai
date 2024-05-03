document.addEventListener('DOMContentLoaded', function () {
    let body = document.querySelector('body');
    let modoToggle = document.querySelector('.modo-toggle input[type="checkbox"]');
    
    modoToggle.addEventListener('change', function () {
        if (body.classList.contains('modo-oscuro')) {
            body.classList.remove('modo-oscuro');
        } else {
            body.classList.add('modo-oscuro');
        }
    });


});