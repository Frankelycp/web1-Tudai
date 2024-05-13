document.addEventListener("DOMContentLoaded", function () {
    let body = document.querySelector("body");
    let modoToggle = document.querySelector('.modo-toggle input[type="checkbox"]');
    let menuIcon = document.querySelector(".menu-icon");
    let menu = document.querySelector(".menu");
    
    modoToggle.addEventListener("change", function () {

        if (body.classList.contains("modo-oscuro")) {
            body.classList.remove("modo-oscuro");
        } else {
            body.classList.add("modo-oscuro");
        }
    });

    menuIcon.addEventListener("click", function () {
        if (menu.classList.contains("show")) {
            menu.classList.remove("show");
        } else {
            menu.classList.add("show");
        }
    });

});

