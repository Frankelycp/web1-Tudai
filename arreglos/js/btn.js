
document.getElementById("btn1").addEventListener("click", btn1);
document.getElementById("btn2").addEventListener("click", btn2);
document.getElementById("btn3").addEventListener("click", btn3);

function btn1() {
    document.getElementById("texto").innerHTML = "ROJO";
    document.getElementById("texto").classList.add("btn1");
}

function btn2() {
    document.getElementById("texto").innerHTML = "AMARILLO";
    document.getElementById("texto").classList.add("btn2");
}

function btn3() {
    document.getElementById("texto").innerHTML = "AZUL";
    document.getElementById("texto").classList.add("btn3");
}

