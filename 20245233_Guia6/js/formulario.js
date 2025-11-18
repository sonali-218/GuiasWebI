// accediendo a los elementos html
const inputNombre = document.getElementById("idTxtNombre");
const inputApellido = document.getElementById("idTxtApellido");
const inputFechaNacimiento = document.getElementById("idTxtFechaNacimiento");
const inputRdMasculino = document.getElementById("idRdMasculino");
const inputRdFemenino = document.getElementById("idRdFemenino");
const cmbPais = document.getElementById("idCmbPais");
const inputDireccion = document.getElementById("idTxtDireccion");
const inputNombrePais = document.getElementById("idNombrePais");

const buttonAgregarPaciente = document.getElementById("idBtnAgregar");
const buttonLimpiarPaciente = document.getElementById("idBtnLimpiar");
const buttonMostrarPaciente = document.getElementById("idBtnMostrar");
const buttonAgregarPais = document.getElementById("idBtnAddPais");

const notificacion = document.getElementById("idNotificacion");

// componente de Bootstrap
const toast = new bootstrap.Toast(notificacion);
const mensaje = document.getElementById("idMensaje");

// componente modal
const idModal = document.getElementById("idModal");

// lista global de pacientes
let arrayPaciente = [];

// función para limpiar el formulario cuando se recargue la página y cuando se presione el botón limpiar
const limpiarForm = () => {
    inputNombre.value = "";
    inputApellido.value = "";
    inputFechaNacimiento.value = "";
    inputRdMasculino.checked = false;
    inputRdFemenino.checked = false;
    cmbPais.value = 0;
    inputDireccion.value = "";
    inputNombrePais.value = "";

    inputNombre.focus();
};

// validar el ingreso del paciente
const addPaciente = function() {
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let fechaNacimiento = inputFechaNacimiento.value;
    let sexo =
        inputRdMasculino.checked == true ? "Hombre"
        : inputRdFemenino.checked == true ? "Mujer"
        : "";
    let pais = cmbPais.value;
    let labelPais = cmbPais.options[cmbPais.selectedIndex].text;
    let direccion = inputDireccion.value;

    if (
        nombre != "" &&
        apellido != "" &&
        fechaNacimiento != "" &&
        sexo != "" &&
        pais != 0 &&
        direccion != ""
    ) {
        // agregando info 
        arrayPaciente.push(
            new Array(nombre, apellido, fechaNacimiento, sexo, labelPais, direccion)
        );

        // mensaje para la noti
        mensaje.innerHTML = "Se ha registrado un nuevo paciente";
        // componente de bootstrap
        toast.show();

        limpiarForm();
    } else {
        mensaje.innerHTML = "Faltan campos por completar";
        toast.show();
    }
};

// función que imprime la ficha de los pacientes registrados
function imprimirFilas() {
    let $fila = "";
    let contador = 1;

    arrayPaciente.forEach((element) => {
        $fila += `<tr>
                    <td scope="row" class="text-center fw-bold">${contador}</td>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td>${element[2]}</td>
                    <td>${element[3]}</td>
                    <td>${element[4]}</td>
                    <td>${element[5]}</td>
                    <td>
                        <button id="idBtnEditar${contador}" type="button" class="btn btn-primary" alt="Eliminar">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button id="idBtnEliminar${contador}" type="button" class="btn btn-danger" alt="Editar">
                            <i class="bi bi-trash3-fill"></i>
                        </button>
                    </td>
                </tr>`;
        contador++;
    });
    return $fila;
};

const imprimirPacientes = () => {
    let $table = `<div class="table-responsive">
                    <table class="table table-striped table-hover table-bordered">
                        <tr>
                            <th scope="col" class="text-center" style="width:5%">#</th>
                            <th scope="col" class="text-center" style="width:15%">Nombre</th>
                            <th scope="col" class="text-center" style="width:15%">Apellido</th>
                            <th scope="col" class="text-center" style="width:10%">Fecha nacimiento</th>
                            <th scope="col" class="text-center" style="width:10%">Sexo</th>
                            <th scope="col" class="text-center" style="width:10%">País</th>
                            <th scope="col" class="text-center" style="width:25%">Dirección</th>
                            <th scope="col" class="text-center" style="width:25%">Opciones</th>
                        </tr>
                        ${imprimirFilas()}
                    </table>
                </div>`;
    document.getElementById("idTablaPacientes").innerHTML = $table;
};

// contador global de los option
let contadorGlobalOption = cmbPais.children.length;
const addPais = () => {
    let paisNew = inputNombrePais.value;

    if (paisNew != "") {
        // nuevo option con la API DOM
        let option = document.createElement("option");
        option.textContent = paisNew;
        option.value = contadorGlobalOption + 1;

        // nuevo option en el select
        cmbPais.appendChild(option);

        // asignando mensaje
        mensaje.innerHTML = "País agregado correctamente";
        toast.show();
    } else {
        mensaje.innerHTML = "Faltan campos por completar";
        toast.show();
    }
};

// agregando eventos y funciones
buttonLimpiarPaciente.onclick = () => {
    limpiarForm();
}

buttonAgregarPaciente.onclick = () => {
    if (indexEditando !== null) {
        actualizarPaciente();
        return;
    }
    addPaciente();
}

buttonMostrarPaciente.onclick = () => {
    imprimirPacientes();
}

buttonAgregarPais.onclick = () => {
    addPais();
}

// se agrega el focus
idModal.addEventListener("shown.bs.modal", () => {
    inputNombrePais.value = "";
    inputNombrePais.focus();
});

// ejecutar función
limpiarForm();


// ----------------------------------------------
// Ejercicio complementario 1
document.getElementById("idTablaPacientes").addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    // delete
    if (btn.id.startsWith("idBtnEliminar")) {
        let index = parseInt(btn.id.replace("idBtnEliminar", "")) - 1;

        arrayPaciente.splice(index, 1);

        mensaje.innerHTML = "Paciente eliminado";
        toast.show();

        imprimirPacientes();
    }

    // edit
    if (btn.id.startsWith("idBtnEditar")) {
        let index = parseInt(btn.id.replace("idBtnEditar", "")) - 1;
        cargarParaEditar(index);
    }
});

let indexEditando = null;

function cargarParaEditar(index) {
    let p = arrayPaciente[index];

    inputNombre.value = p[0];
    inputApellido.value = p[1];
    inputFechaNacimiento.value = p[2];
    (p[3] === "Hombre") 
        ? inputRdMasculino.checked = true 
        : inputRdFemenino.checked = true;

    // asignar país según su texto
    for (let opt of cmbPais.options) {
        if (opt.text === p[4]) {
            cmbPais.value = opt.value;
            break;
        }
    }

    inputDireccion.value = p[5];

    indexEditando = index;

    buttonAgregarPaciente.textContent = "Actualizar Datos";
    buttonAgregarPaciente.classList.remove("btn-success");
    buttonAgregarPaciente.classList.add("btn-primary");
}

function actualizarPaciente() {
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let fechaNacimiento = inputFechaNacimiento.value;
    let sexo = inputRdMasculino.checked ? "Hombre" : "Mujer";
    let pais = cmbPais.options[cmbPais.selectedIndex].text;
    let direccion = inputDireccion.value;

    arrayPaciente[indexEditando] = [
        nombre, apellido, fechaNacimiento, sexo, pais, direccion
    ];

    mensaje.innerHTML = "Paciente actualizado";
    toast.show();

    // restaurar estado
    indexEditando = null;
    buttonAgregarPaciente.textContent = "Guardar Datos";
    buttonAgregarPaciente.classList.remove("btn-primary");
    buttonAgregarPaciente.classList.add("btn-success");

    limpiarForm();
    imprimirPacientes();
}
