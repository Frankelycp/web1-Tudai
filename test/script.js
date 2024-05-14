document.addEventListener('DOMContentLoaded', function () {
    let c = document.getElementById("c");
    let clickCount = 0;
    const MAX_CLICKS = 3;
    let captcha = '';

    document.getElementById("formulario").addEventListener("submit", function(event) {
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
        captcha = letrasAleatorias(5);
        document.getElementById("captcha").innerHTML = captcha;
    }
    generarCaptcha();

    function validar() {
        let mensaje = "";
        if (c.value === "") {
            generarCaptcha();
            mensaje = "Por favor, ingrese el captcha.";
        } else {
            clickCount++;
            if (!(c.value === captcha && clickCount <= MAX_CLICKS)) {
                mensaje = "Captcha Invalido, le quedan " + (MAX_CLICKS - clickCount) + " intentos";
                if (clickCount >= MAX_CLICKS) {
                    generarCaptcha();
                    clickCount = 0;
                    mensaje = "Ha excedido el número máximo de intentos. Por favor, vuelva a intentarlo.";
                }
            } else {
                clickCount = 0;
                mensaje = "Captcha Valido";
                c.value = "";
                document.getElementById("captcha").innerHTML = "";
            }
        }

        document.getElementById("catp").innerHTML = mensaje;
    }
});
