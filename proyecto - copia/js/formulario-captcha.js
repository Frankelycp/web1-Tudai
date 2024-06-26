document.addEventListener("DOMContentLoaded", function () {
    let inputCaptcha = document.getElementById("inputCaptcha");
    let contadorClick = 0;
    let MAX_CLICKS = 3;
    let CANTIDADCARACTERESCAPTCHA = 10;
    let filtroInput = document.getElementById("filtro");
    let tabla = document.querySelector('#tabla-dinamica tbody');
    let url = 'https://6660b1f25425580055b4e9ff.mockapi.io/productos/comentarios';
    let paginaActual = 1;
    let elementosPorPagina = 10;
    let datos = [];

    filtroInput.addEventListener("input", function () {
        let filtro = filtroInput.value.trim().toLowerCase();
        filtrarDatos(filtro);
    });

    function filtrarDatos(filtro) {
        let filtroMinusculas = filtro.toLowerCase(); // Convertir filtro a minúsculas

        let datosFiltrados = datos.filter(item =>
            item.nombre.toLowerCase().includes(filtroMinusculas)
        );

        renderizarTabla(datosFiltrados);
        agregarControlesPaginacion(datosFiltrados.length);
    }

    document.getElementById("formulario").addEventListener("submit", function (event) {
        event.preventDefault();
        validar();
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
        let captcha = letrasAleatorias(CANTIDADCARACTERESCAPTCHA);
        document.getElementById("captcha").innerHTML = captcha;
    }

    generarCaptcha();

    function limpiarFormulario() {
        inputCaptcha.value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("comentarios").value = "";
        setTimeout(limpiarMensaje, 3000);
    }

    function mostrarMensaje(mensaje) {
        document.getElementById("mensaje").innerHTML = mensaje;
    }

    function limpiarMensaje() {
        document.getElementById("mensaje").innerHTML = "";
    }

    let editarId = null;

    function validar() {
        let mensaje = "";
        let captcha = document.getElementById("captcha").innerText;
        if (inputCaptcha.value === "") {
            generarCaptcha();
            mensaje = "Por favor, ingrese caracteres en el captcha.";
        } else {
            contadorClick++;
            if (!(inputCaptcha.value === captcha && contadorClick <= MAX_CLICKS)) {
                mensaje = "Captcha Invalido, le quedan " + (MAX_CLICKS - contadorClick) + " intentos";
                if (contadorClick >= MAX_CLICKS) {
                    generarCaptcha();
                    contadorClick = 0;
                    mensaje = "Excedió el número máximo de intentos";
                }
            } else {
                contadorClick = 0;
                mensaje = "Captcha Valido";
                if (editarId) {
                    editarDatos(editarId);
                } else {
                    agregarDatos();
                }
                limpiarFormulario();
                document.getElementById("captcha").innerHTML = "";
                window.location.reload();

                generarCaptcha();
            }
        }
        mostrarMensaje(mensaje);
    }


    async function cargarDatos() {
        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error('Error al cargar los datos');
            }
            datos = await response.json();
            filtrarDatos(filtroInput.value.trim().toLowerCase());
        } catch (error) {
            console.error('Error:', error);
        }
    }

    function renderizarTabla(datos) {
        let inicio = (paginaActual - 1) * elementosPorPagina;
        let fin = inicio + elementosPorPagina;
        let datosPaginados = datos.slice(inicio, fin);

        tabla.innerHTML = '';
        datosPaginados.forEach(item => {
            const fila = `
                <tr data-id="${item.id}">
                    <td>${item.nombre}</td>
                    <td>${item.apellido}</td>
                    <td>${item.email}</td>
                    <td>${item.telefono}</td>
                    <td>${item.comentarios}</td>
                    <td>
                        <button onclick="editarFormulario(${item.id})">Editar</button>
                        <button onclick="eliminar(${item.id})">Eliminar</button>
                    </td>
                </tr>
            `;
            tabla.innerHTML += fila;
        });
    }


    function agregarControlesPaginacion(totalItems) {
        let paginasTotales = Math.ceil(totalItems / elementosPorPagina);
        let paginacionContainer = document.getElementById('paginacion');
        paginacionContainer.innerHTML = '';

        for (let i = 1; i <= paginasTotales; i++) {
            let boton = document.createElement('button');
            boton.innerText = i;
            boton.addEventListener('click', function () {
                paginaActual = i;
                renderizarTabla(datos); // Renderizar tabla con datos filtrados y paginados
            });
            paginacionContainer.appendChild(boton);
        }

        let btnAnterior = document.createElement('button');
        btnAnterior.innerText = 'Anterior';
        btnAnterior.addEventListener('click', function () {
            if (paginaActual > 1) {
                paginaActual--;
                renderizarTabla(datos); // Renderizar tabla con datos filtrados y paginados
            }
        });
        paginacionContainer.appendChild(btnAnterior);

        let btnSiguiente = document.createElement('button');
        btnSiguiente.innerText = 'Siguiente';
        btnSiguiente.addEventListener('click', function () {
            if (paginaActual < paginasTotales) {
                paginaActual++;
                renderizarTabla(datos); // Renderizar tabla con datos filtrados y paginados
            }
        });
        paginacionContainer.appendChild(btnSiguiente);
    }

    async function agregarDatos() {
        let cantidadActual = datos.length; // Obtener la cantidad total de elementos

        if (cantidadActual >= 100) {
            mostrarMensajeCarga('No se pueden agregar más de 100 datos en la API.');
            setTimeout(() => {
                window.location.reload();
            }, 4000);
        } else {
            let nombre = document.getElementById('nombre').value;
            let apellido = document.getElementById('apellido').value;
            let email = document.getElementById('email').value;
            let telefono = document.getElementById('telefono').value;
            let comentarios = document.getElementById('comentarios').value;

            try {
                let response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ nombre, apellido, email, telefono, comentarios }),
                });
                if (!response.ok) {
                    throw new Error('Error al agregar el dato');
                }
                await cargarDatos(); // Recargar datos después de agregar
                document.getElementById('formulario').reset(); // Limpiar formulario
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }




    async function editarDatos(id) {
        let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('apellido').value;
        let email = document.getElementById('email').value;
        let telefono = document.getElementById('telefono').value;
        let comentarios = document.getElementById('comentarios').value;

        try {
            let response = await fetch(`${url}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({nombre, apellido, email, telefono, comentarios}),
            });
            if (!response.ok) {
                throw new Error('Error al editar el dato');

            }
            editarId = null;
            cargarDatos();
            document.getElementById('formulario').reset(); // Limpiar formulario
        } catch (error) {
            console.error('Error:', error);

        }
    }

    async function eliminar(id) {
        try {
            let response = await fetch(`${url}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Error al eliminar el dato');
            }
            cargarDatos();
            filtroInput.value = ''
        } catch (error) {
            console.error('Error:', error);

        }
    }

    window.eliminar = eliminar;

    window.editarFormulario = function (id) {
        let fila = document.querySelector(`tr[data-id="${id}"]`);
        document.getElementById('nombre').value = fila.cells[0].textContent;
        document.getElementById('apellido').value = fila.cells[1].textContent;
        document.getElementById('email').value = fila.cells[2].textContent;
        document.getElementById('telefono').value = fila.cells[3].textContent;
        document.getElementById('comentarios').value = fila.cells[4].textContent;
        editarId = id;
    };

    let cantidadItemsInput = document.getElementById("cantidadItems");
    let crearItemsButton = document.getElementById("crearItems");


    function crearItems() {
        let cantidad = document.getElementById('cantidad').value;
        for (let i = 0; i < cantidad; i++) {
            mostrarItems();
        }
    }


    async function crearItems() {

        let cantidad = parseInt(document.getElementById('cantidad').value);

            let items = [];
            for (let i = 0; i < cantidad; i++) {
                items.push({
                    nombre: `Nombre${i + 1}`,
                    email: `email${i + 1}@ejemplo.com`,
                });
            }

            try {
                for (let item of items) {
                    let response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(item),
                    });
                    if (!response.ok) {
                        throw new Error('Error al agregar los datos automáticamente');

                    }
                }
                cargarDatos();
            } catch (error) {
                console.error('Error:', error);
            }
        }

    function mostrarMensajeCarga(mensaje) {
        let mensajeCarga = document.getElementById('mensaje-carga');
        mensajeCarga.innerText = mensaje;
        mensajeCarga.style.display = 'block';
    }

    function ocultarMensajeCarga() {
        document.getElementById('mensaje-carga').style.display = 'none';
    }

    crearItemsButton.addEventListener('click', function () {
        crearItemsAutomaticamente();
        cantidadItemsInput.value = '';
    });


    window.onload = cargarDatos;
});
