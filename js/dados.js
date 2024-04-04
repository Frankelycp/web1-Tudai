"use strict";

document.getElementById("btnLanzar").addEventListener("click", tirarDados);
let d1;
let d2;

function tirarDados(){

    d1 = Math.floor((Math.random() * 6 ) + 1);
    d2 = Math.floor((Math.random() * 6 ) + 1);

    console.log(d1);
    console.log(d2);

    let suma = d1 + d2;

    console.log("El valor de la suma es: " + suma);

    if(suma === 8){
        document.getElementById("texto").innerHTML = "SALIO EL 8";
    }
    else {
        document.getElementById("texto").innerHTML = " ";
    }

    document.getElementById("dado1").src = "./img/dado"+d1+".png";
    document.getElementById("dado2").src = "./img/dado"+d2+".png";
    document.getElementById("dado1").classList.remove("img");
    document.getElementById("dado2").classList.remove("img");
    document.getElementById("dado1").classList.add("dados")
    document.getElementById("dado2").classList.add("dados")

}


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
