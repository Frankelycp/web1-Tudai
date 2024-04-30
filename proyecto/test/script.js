document.addEventListener('DOMContentLoaded', function () {
    let c = document.getElementById("c");
    let submitButton = document.getElementById("submitButton");
    let clickCount = 0;
    const MAX_CLICKS = 3;
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
        captcha = Math.floor(Math.random()*90*70*90*5*9);
        document.getElementById("captcha").innerHTML = captcha + letrasAleatorias(10);
    }
    generarCaptcha();

    submitButton.addEventListener("click", function(event) {
        clickCount++;
        if (clickCount >= MAX_CLICKS) {
            generarCaptcha();
            clickCount = 0;
        }
    });
    function validar() {
        if (c.value == captcha){
            document.getElementById("catp").innerHTML = "PASO";
            document.getElementById("test").innerHTML = " ";
            c.value = ""
        }
        else {
            document.getElementById("catp").innerHTML = "Para validar debe ingresar el Catpcha le quedan " + (MAX_CLICKS-clickCount) + " intentos";
            document.getElementById("test").innerHTML = f;
        }
    }
});