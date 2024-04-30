"use strict";
document.addEventListener("DOMContentLoaded",function () {

    var elementoOculto = document.getElementById("oculto");
    elementoOculto.hidden = true;
    document.getElementById("toggle").addEventListener("change",esconder);

    function esconder() {
        if (elementoOculto.hidden) {
            elementoOculto.hidden = false;
        }
        else {
            elementoOculto.hidden = true;
        }
    }

    });



// document.addEventListener("DOMContentLoaded",function () {
//     const collection = Array.from(document.getElementsByTagName('li'))
//
//     let tareas = [];
//     let lista = [];
//     document.getElementById("boton").addEventListener("click", agregarTareas);
//
//     function agregarTareas() {
//         if (tareas.length <= 9) {
//             tareas.push(document.getElementById("tareas").value);
//             console.log(tareas);
//             document.getElementById("tareas").value = "";
//             var listItem = document.createElement("li");
//             listItem.textContent = tareas;
//             lista.appendChild(listItem);
//         }
//
//     else alert("no puede ingresar mas valores a la lista")
//     }
// });


// /**ESTRUCTURA GENERAL
//  * document = hace referencia al documento HTML
//  * getElementById("lo que sea") = hace referencia a un metodo de JavaScript que busca y obtiene el identificador del elemento que pongamos entre parentesis
//  * addEventListener("evento", funcion) = se encarga de asignarle al elemento del identificador obtenido anteriormente, el evento CLICK (o algun otro) y de ejecutar la FUNCION declarada seguido del evento
//  *
//  * Se podria decir que la secuencia de lectura es la siguiente:
//  * 1. Se referencia el documento.
//  * 2. Se ejecuta una funcion para obtener el identificador del elemento dentro del documento.
//  * 3. Se ejecuta un metodo para asignarle un evento y una funcion al identificador del elemento obtenido.
//  */
//
// document.getElementById("botonMOscuro").addEventListener("click", modoOscuro);
// document.getElementById("botonMClaro").addEventListener("click", modoDia);
//
// /**ESTRUCTURA GENERAL
//  * function = declaracion de una funcion
//  * nombre() = nombre que toma la funcion
//  */
// function modoOscuro(){
//     /**ESTRUCTURA GENERAL
//      * document = hace referencia al documento HTML
//      * getElementById("lo que sea") = hace referencia a un metodo de JavaScript que busca y obtiene el identificador que pongamos entre parentesis
//      * classList.opcionElegida("clase elegida referida al CSS") = es una propiedad que se encarga de asignarle o eliminar la clase puesta entre parentesis al identificador obtenido anteriormente.
//      *
//      * Se podria decir que la secuencia de lectura es la siguiente:
//      * 1. Se refencia al documento.
//      * 2. Se ejecuta una funcion para obtener el identificador del elemento dentro del documento.
//      * 3. Se le da una propiedad al elemento identificado previamente
//      */
//     document.getElementById("cuerpo").classList.add("modoOscuro");
//     document.getElementById("cuerpo").classList.remove("modoClaro");
// }
//
// function modoDia(){
//     document.getElementById("cuerpo").classList.add("modoClaro");
//     document.getElementById("cuerpo").classList.remove("modoOscuro");
// }
