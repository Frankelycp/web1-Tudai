const url = "https://66756e56a8d2b4d072f000ae.mockapi.io/api/comentarios";


async function obtenerDatos(){
    let tabla = document.querySelector("#tablaComentarios");
    tabla.innerHTML = "";
    try {
        let res = await fetch (url);
        let json = await res.json();
        console.log(json[1]);
        for (const fila of json){
            tabla.innerHTML += `<tr>
                          <td>${fila.id}</td>
                          <td>${fila.nombre}</td>
                          <td>${fila.apellido}</td>
                          <td>${fila.mail}</td>
                          <td>${fila.telefono}</td>
                          <td>${fila.comentario}</td>
                          <td>
                            <button onclick="editarFila(${fila.id})">Editar</button>
                            <button onclick="eliminarFila(${fila.id})">Eliminar</button>
                          </td>
                          </tr>`; 
        }  
    } catch (error) {
        console.log(error);
    }
}
async function eliminarFila (id){

    try {
        let res = await fetch (`${url}/${id}`,{
            method : "DELETE",
        }); 
        if (!res.status === 200){
            throw new error ("No se pudieron eliminar los datos");
        }

    } catch (error) {
        console.error(error);
        
    }
    obtenerDatos();
}


async function editarFila (id){
    // let nombre = document.getElementById("nombre").value;
    // let apellido = document.getElementById("apellido").value;
    // let mail = document.getElementById("email").value;
    // let telefono = document.getElementById("telefono").value;
    // let comentario = document.getElementById("comentarios").value;
    
    try {
        let res = await fetch (`${url}/${id}`);
        let json = await res.json();
        document.getElementById("nombre").value = json.nombre;
        document.getElementById("apellido").value = json.apellido;
        document.getElementById("email").value = json.mail;
        document.getElementById("telefono").value = json.telefono;
        document.getElementById("comentarios").value = json.comentario;
        // if (!res.status === 200){
        //     throw new error ("No se pudieron editar los datos");
        // }

    } catch (error) {
        console.error(error);
        
    }
    // obtenerDatos();
}



window.onload = obtenerDatos();

// let res = await fetch (`${url}/${id}`,{
//     method : "PUT",
//     headers: {"content-type": "application/json"},
//     body: JSON.stringify({nombre,apellido, mail, telefono, comentario}),
// });