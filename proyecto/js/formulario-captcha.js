document.addEventListener('DOMContentLoaded', function () {
    let inputCaptcha = document.getElementById("inputCaptcha");
    let clickCount = 0;
    let nombre = document.getElementById("nombre")
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let comentarios = document.getElementById("comentarios");
    const MAX_CLICKS = 3;
    const CANTIDADCARACTERESCAPTCHA = 10;

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
        let captcha = letrasAleatorias(CANTIDADCARACTERESCAPTCHA);
        //ESTE ES EL ID DEL PARAFO DONDE SE GENERARA EL CAPTCHA
        document.getElementById("captcha").innerHTML = captcha;
    }
    generarCaptcha();

    function limpiarFormulario(){
        inputCaptcha.value = "";
        nombre.value = "";
        apellido.value = "";
        email.value = "";
        telefono.value = "";
        comentarios.value = "";
        setTimeout (limpiarMensaje, 3000);
    };

    function mostrarMensaje(mensaje) {
        document.getElementById("mensaje").innerHTML = mensaje;
        
    };
    
    function limpiarMensaje (){
        document.getElementById("mensaje").innerHTML = "";
    };

    function validar() {
        let mensaje = "";
        if (inputCaptcha.value === "") {
            generarCaptcha();
            mensaje = "Por favor, ingrese el captcha.";
        } else {
            clickCount++;
            if (!(inputCaptcha.value === captcha.innerText && clickCount <= MAX_CLICKS)) {
                mensaje = "Captcha Invalido, le quedan " + (MAX_CLICKS - clickCount) + " intentos";
                if (clickCount >= MAX_CLICKS) {
                    generarCaptcha();
                    clickCount = 0;
                    mensaje = "Ha excedido el número máximo de intentos";
                }
            } else {
                clickCount = 0;
                mensaje = "Captcha Valido";
                limpiarFormulario();
                document.getElementById("captcha").innerHTML = "";
                generarCaptcha();//solo con esta linea se vuelve a generar un nuevo código y queda visible
            }
        }
        mostrarMensaje(mensaje);
    }

});