document.addEventListener('DOMContentLoaded', function () {
    let menuIcon = document.querySelector('.menu-icon');
    let menu = document.querySelector('.menu');
    let inputCapcha = document.getElementById("inputCaptcha");
    let clickCount = 0;
    let nombre = document.getElementById("nombre")
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let comentarios = document.getElementById("comentarios");
    const MAX_CLICKS = 3;
    

    menuIcon.addEventListener('click', function () {
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        } else {
            menu.classList.add('show');
        }
    });

    document.getElementById("formulario").addEventListener("submit", function (event) {
       event.preventDefault();
       validar(); 
    });


    function letrasAleatorias(cantidad) {
        let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let resultado = '';
        for (let i = 0; i < cantidad; i++) {
            let indice = Math.floor(Math.random() * letras.length);
            resultado += letras.charAt(indice);
        }
        return resultado;
    }
    function generarCaptcha() {
        let captcha = letrasAleatorias(5);
        //ESTE ES EL ID DEL PARAFO DONDE SE GENERARA EL CAPTCHA
        document.getElementById("captcha").innerHTML = captcha;
    }
    generarCaptcha();
    

    function validar() {
        let mensaje = "";
        if (inputCapcha.value === "") {
            generarCaptcha();
            mensaje = "Por favor, ingrese el captcha.";
        } else {
            clickCount++;
            if (!(inputCapcha.value === captcha.innerText && clickCount <= MAX_CLICKS)) {
                mensaje = "Captcha Invalido, le quedan " + (MAX_CLICKS - clickCount) + " intentos";
                if (clickCount >= MAX_CLICKS) {
                    generarCaptcha();
                    clickCount = 0;
                    mensaje = "Ha excedido el número máximo de intentos. Por favor, vuelva a intentarlo.";
                }
            } else {
                clickCount = 0;
                mensaje = "Captcha Valido";
                inputCapcha.value = "";
                nombre.value = "";
                apellido.value = "";
                email.value = "";
                telefono.value = "";
                comentarios.value = "";
                document.getElementById("captcha").innerHTML = "";
            }
        }

        document.getElementById("mensaje").innerHTML = mensaje;
    }

});