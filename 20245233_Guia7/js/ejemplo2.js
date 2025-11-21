// referencias
const formulario = document.forms["frmRegistro"];
const button = document.forms["frmRegistro"].elements["btnRegistro"];

const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

const bodyModal = document.getElementById("idBodyModal");

// recorrer el formulario
const recorrerFormulario = function () {
    let totText = 0;
    let totRadio = 0;
    let totCheck = 0;
    let totDate = 0;
    let totSelect = 0;
    let totFile = 0;
    let totPass = 0;
    let totEmail = 0;

    let elementos = formulario.elements;
    let totalElementos = elementos.length;

    for (let index = 0; index < totalElementos; index++) {
        let elemento = elementos[index];

        let tipoElemento = elemento.type;
        let tipoNode = elemento.nodeName;

        // input type
        if (tipoElemento == "text" && tipoNode == "INPUT") {
            console.log(elemento);
            totText++;
        }
        // password
        else if (tipoElemento == "password" && tipoNode == "INPUT") {
            console.log(elemento);
            totPass++;
        }
        // email
        else if (tipoElemento == "email" && tipoNode == "INPUT") {
            console.log(elemento);
            totEmail++;
        }
        // radio
        else if (tipoElemento == "radio" && tipoNode == "INPUT") {
            console.log(elemento);
            totRadio++;
        }
        // checkbox
        else if (tipoElemento == "checkbox" && tipoNode == "INPUT") {
            console.log(elemento);
            totCheck++;
        }
        // file
        else if (tipoElemento == "file" && tipoNode == "INPUT") {
            console.log(elemento);
            totFile++;
        }
        // checkbox
        else if (tipoElemento == "date" && tipoNode == "INPUT") {
            console.log(elemento);
            totDate++;
        }
        // email
        else if (tipoNode == "SELECT") {
            console.log(elemento);
            totSelect++;
        }
    }

    let resultado = `
        Total de input[type="text"] = ${totText}<br>
        Total de input[type="password"] = ${totPass}<br>
        Total de input[type="radio"] = ${totRadio}<br>
        Total de input[type="checkbox"] = ${totCheck}<br>
        Total de input[type="date"] = ${totDate}<br>
        Total de input[type="email"] = ${totEmail}<br>
        Total de select = ${totSelect}<br>
    `;

    bodyModal.innerHTML = resultado;
    modal.show();
};

// eventos al botón
button.onclick = () => {
    recorrerFormulario();
};

// ---------------------------------------
// Validar la información del formulario
const btnValidar = document.getElementById("idBtnValidar");

btnValidar.onclick = () => {
    validarFormulario();
};

function validarFormulario() {

    const nombre = document.getElementById("idNombre");
    const apellidos = document.getElementById("idApellidos");
    const fecha = document.getElementById("idFechaNac");
    const correo = document.getElementById("idCorreo");
    const pass = document.getElementById("idPassword");
    const passRep = document.getElementById("idPasswordRepetir");
    const pais = document.getElementById("idCmPais");

    // campos vacíos
    if (!nombre.value.trim() ||
        !apellidos.value.trim() ||
        !fecha.value ||
        !correo.value.trim() ||
        !pass.value.trim() ||
        !passRep.value.trim()) {

        alert("Todos los campos obligatorios deben estar llenos.");
        return;
    }

    // fecha
    let fechaIngresada = new Date(fecha.value);
    let hoy = new Date();

    if (fechaIngresada > hoy) {
        alert("La fecha de nacimiento no puede ser posterior a hoy.");
        return;
    }

    // correo 
    let expCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expCorreo.test(correo.value)) {
        alert("El correo electrónico no es válido.");
        return;
    }

    // contra
    if (pass.value !== passRep.value) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // intereses (checkbox) 
    const intereses = [
        "idCkProgramacion",
        "idCkBD",
        "idCkRedes",
        "idCkSeguridad"
    ];

    let interesMarcado = intereses.some(id => document.getElementById(id).checked);

    if (!interesMarcado) {
        alert("Debe seleccionar al menos un interés.");
        return;
    }

    // carrera (radio) 
    const carreras = document.getElementsByName("idRdCarrera");
    let carreraSeleccionada = null;

    carreras.forEach(r => {
        if (r.checked) carreraSeleccionada = r.id;
    });

    if (!carreraSeleccionada) {
        alert("Debe seleccionar una carrera.");
        return;
    }

    // país
    if (pais.value === "Seleccione una opcion") {
        alert("Seleccione un país de origen.");
        return;
    }

    // OK → MOSTRAR EN MODAL

    // limpiar modal
    bodyModal.innerHTML = "";

    // crear tabla con DOM
    const tabla = document.createElement("table");
    tabla.className = "table table-bordered";

    const tbody = document.createElement("tbody");

    const agregarFila = (campo, valor) => {
        const tr = document.createElement("tr");

        const tdCampo = document.createElement("td");
        tdCampo.textContent = campo;

        const tdValor = document.createElement("td");
        tdValor.textContent = valor;

        tr.appendChild(tdCampo);
        tr.appendChild(tdValor);
        tbody.appendChild(tr);
    };

    agregarFila("Nombres", nombre.value);
    agregarFila("Apellidos", apellidos.value);
    agregarFila("Fecha nacimiento", fecha.value);
    agregarFila("Correo", correo.value);
    agregarFila("País", pais.options[pais.selectedIndex].text);

    // intereses 
    const interesesSeleccionados = intereses
        .filter(id => document.getElementById(id).checked)
        .map(id => document.querySelector(`label[for=${id}]`).textContent)
        .join(", ");

    agregarFila("Intereses", interesesSeleccionados);

    // carrera
    const carreraTexto = document.querySelector(`label[for=${carreraSeleccionada}]`).textContent;
    agregarFila("Carrera", carreraTexto);

    tabla.appendChild(tbody);
    bodyModal.appendChild(tabla);

    modal.show();
}
