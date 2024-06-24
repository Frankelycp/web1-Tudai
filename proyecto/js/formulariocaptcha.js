let inputCaptcha = document.getElementById("inputCaptcha");
let contadorClick = 0;
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const comentarios = document.getElementById("comentarios");
const MAX_CLICKS = 3;
const CANTIDADCARACTERESCAPTCHA = 10;
const url = 'https://66756e56a8d2b4d072f000ae.mockapi.io/api/comentarios';
let esEdicion = false;
let idEditado = null;

document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();
    enviarFormulario();
});


function letrasAleatorias(cantidad) {
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let resultado = "";
    for (let i = 0; i < cantidad; i++) {
        let indice = Math.floor(Math.random() * letras.length);
        resultado += letras.charAt(indice);
    }
    return resultado;
}
function generarCaptcha() {
    let captcha = letrasAleatorias(CANTIDADCARACTERESCAPTCHA); //ESTE ES EL ID DEL PARAFO DONDE SE GENERARA EL CAPTCHA
    document.getElementById("captcha").innerHTML = captcha;
}
generarCaptcha();

function limpiarFormulario() {
    inputCaptcha.value = "";
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    telefono.value = "";
    comentarios.value = "";
    setTimeout(limpiarMensaje, 3000);
    esEdicion = false;
    idEditado = null;
};

function mostrarMensaje(mensaje) {
    document.getElementById("mensaje").innerHTML = mensaje;
};

function limpiarMensaje() {
    document.getElementById("mensaje").innerHTML = "";
};

function enviarFormulario() {
    let mensaje = "";
    console.log(mensaje.class);
    if (inputCaptcha.value === "") {
        generarCaptcha();
        mensaje = "Por favor, ingrese caracteres en el captcha.";
    } else {
        contadorClick++;
        if (!(inputCaptcha.value === captcha.innerText && contadorClick <= MAX_CLICKS)) {
            mensaje = "Captcha Invalido, le quedan " + (MAX_CLICKS - contadorClick) + " intentos";
            if (contadorClick >= MAX_CLICKS) {
                generarCaptcha();
                contadorClick = 0;
                mensaje = "Excedió el número máximo de intentos";
            }
        } else {
            contadorClick = 0;
            if (esEdicion && idEditado) {
                modificarFila(idEditado);
            } else {
                enviarComentario();
            }
            limpiarFormulario();
            document.getElementById("captcha").innerHTML = "";
            generarCaptcha();
        }
    }
    mostrarMensaje(mensaje);
}

async function enviarComentario(){
        
    let fila = {
        "nombre" : nombre.value,
        "apellido" : apellido.value,
        "mail" : email.value,
        "telefono" : telefono.value,
        "comentario" : comentarios.value
    }
    
    try{
        let res = await fetch(url, {
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": JSON.stringify(fila)
        });
        if (res.status === 201){
            console.log ("Cargado!");
        }
    } catch (error){
        console.log(error);
    }
    obtenerDatos();       
}

async function obtenerDatos(){
    let tabla = document.querySelector("#tablaComentarios");
    tabla.innerHTML = "";
    try {
        let res = await fetch (url);
        let json = await res.json();
        for (const fila of json){
            tabla.innerHTML += `<tr>
                          <td>${fila.id}</td>
                          <td>${fila.nombre}</td>
                          <td>${fila.apellido}</td>
                          <td>${fila.mail}</td>
                          <td>${fila.telefono}</td>
                          <td>${fila.comentario}</td>
                          <td>
                            <button class="btn_editar" onclick="rellenarFormulario(${fila.id})">&#128221;</button>
                            <button class="btn_eliminar" onclick="eliminarFila(${fila.id})">&#10060</button>
                          </td>
                          </tr>`; 
        }  
    } catch (error) {
        console.log(error);
    }
}

obtenerDatos();


async function eliminarFila (id){
    
    try {
        let res = await fetch (`${url}/${id}`,{
            method : "DELETE",
        }); 
        if (!res.status === 200){
            console.log("Los datos fueron eliminados");
        }

    } catch (error) {
        console.error(error);
        
    }
    obtenerDatos();
}

async function rellenarFormulario(id) {
    try {
        let res = await fetch(`${url}/${id}`);
        let fila = await res.json();
        nombre.value = fila.nombre;
        apellido.value = fila.apellido;
        email.value = fila.mail;
        telefono.value = fila.telefono;
        comentarios.value = fila.comentario;

        esEdicion = true;
        idEditado = id;
    } catch (error) {
        console.error(error);
    }
}

async function modificarFila(id) {
    let fila = {
        "nombre": nombre.value,
        "apellido": apellido.value,
        "mail": email.value,
        "telefono": telefono.value,
        "comentario": comentarios.value
    }

    try {
        let res = await fetch(`${url}/${id}`, {
            "method": "PUT",
            "headers": { "content-type": "application/json" },
            "body": JSON.stringify(fila)
        });
        if (res.status === 200) {
            console.log("Modificado!");
        }
    } catch (error) {
        console.log(error);
    }
    obtenerDatos();
    limpiarFormulario();
}

obtenerDatos();

