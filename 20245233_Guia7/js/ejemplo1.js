const newForm = document.getElementById("idNewForm");

// botones
const buttonCrear = document.getElementById("idBtnCrear");
const buttonAddElemento = document.getElementById("idBtnAddElement");

// select
const cmbElemento = document.getElementById("idCmbElemento");

// controles del modal
const tituloElemento = document.getElementById("idTituloElemento");
const nombreElemento = document.getElementById("idNombreElemento");

// creando modal con bootstrap
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

const verificarTipoElemento = function () {
    let elemento = cmbElemento.value;
    if (elemento != "") {
        modal.show();
    } else {
        alert("Debe seleccionar el elemento que se creara");
    }
};

// elemento de tipo select
const newSelect = function () {
    let addElemento = document.createElement("select");
    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("class", "form-select");

    // creando option
    for (let i = 1; i <= 10; i++) {
        let addOption = document.createElement("option");
        addOption.value = i;
        addOption.innerHTML = `Opcion ${i}`;
        addElemento.appendChild(addOption);
    }

    // label para nuevo contol
    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);
    labelElemento.textContent = tituloElemento.value;

    // creando label id
    let labelId = document.createElement("span");
    labelId.textContent = `ID de control : ${nombreElemento.value}`;

    // plantilla de boostrap
    let divElemento = document.createElement("div");
    divElemento.setAttribute("class", "form-floating");

    // input - hijo del div
    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);

    // span 
    newForm.appendChild(labelId);

    newForm.appendChild(divElemento);
};

const newRadioCheckbox = function (newElemento) {
    let addElemento = document.createElement("input");
    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-check-input");

    // label para nuevo control
    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("class", "form-check-label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);
    labelElemento.textContent = tituloElemento.value;

    //label de id
    let labelId = document.createElement("span");
    labelId.textContent = `ID de control : ${nombreElemento.value}`;

    // plantilla de bootstrap
    let divElemento = document.createElement("div");
    divElemento.setAttribute("class", "form-check");

    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);

    newForm.appendChild(labelId);

    newForm.appendChild(divElemento);
};

const newInput = function (newElemento) {
    let addElemento =
        newElemento == "textarea"
            ? document.createElement("textarea")
            : document.createElement("input");
    
    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-control");
    addElemento.setAttribute("placeholder", tituloElemento.value);

    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);

    let iconLabel = document.createElement("i");
    iconLabel.setAttribute("class", "bi bi-tag");

    labelElemento.textContent = tituloElemento.value;

    labelElemento.insertAdjacentElement("afterbegin", iconLabel);

    // label de id
    let labelId = document.createElement("span");
    labelId.textContent = `ID de control : ${nombreElemento.value}`;

    let divElemento = document.createElement("div");
    divElemento.setAttribute("class", "form-floating mb-3");

    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);

    newForm.appendChild(labelId);
    newForm.appendChild(divElemento);
};

// evento click a los botones
buttonCrear.onclick = () => {
    verificarTipoElemento();
};

buttonAddElemento.onclick = () => {
    if (nombreElemento.value != "" && tituloElemento.value != "") {

        if (!validarIdUnico()) {
            alert("Ya existe un control con ese ID. Debe ingresar otro.");
            return;
        }

        let elemento = cmbElemento.value;

        if (elemento == "select") {
            newSelect();
        } else if (elemento == "radio" || elemento == "checkbox") {
            newRadioCheckbox(elemento);
        } else {
            newInput(elemento);
        }
    } else {
        alert("Faltan campos por completar");
    }
};

// limpiar el formulario
document.getElementById("idModal").addEventListener("shown.bs.modal", () => {
    tituloElemento.value = "";
    nombreElemento.value = "";
    tituloElemento.focus();
});


// -----------------------------------
// Validar que el ID de los controles nuevos no se repita y muestre un mensaje adecuado
const validarIdUnico = function () {
    let idBuscado = `id${nombreElemento.value}`;
    return document.getElementById(idBuscado) === null;
};

// Validar la información de los nuevos controles agregados al formulario
const validarFormulario = function () {
    let controles = newForm.querySelectorAll("input, select, textarea");
    let errores = [];

    controles.forEach(ctrl => {
        if (ctrl.type === "radio") {
            let grupo = newForm.querySelectorAll(`input[name="${ctrl.name}"]`);
            let algunoMarcado = [...grupo].some(x => x.checked);
            if (!algunoMarcado) errores.push(`Debe seleccionar una opción de ${ctrl.name}`);
        }
        else if (ctrl.type === "checkbox") {
            if (!ctrl.checked) errores.push(`Debe marcar la opción: ${ctrl.id}`);
        }
        else if (ctrl.tagName === "SELECT") {
            if (ctrl.value === "") errores.push(`Debe seleccionar una opción del campo ${ctrl.id}`);
        }
        else {
            if (ctrl.value.trim() === "") errores.push(`El campo ${ctrl.id} está vacío`);
        }
    });

    if (errores.length > 0) {
        alert("Errores encontrados:\n\n" + errores.join("\n"));
    } else {
        alert("Todo válido. El formulario está completo.");
    }
};

document.getElementById("idBtnValidar").onclick = () => {
    validarFormulario();
};

// Adicione la creación de tipos de elementos color y email
addElemento.setAttribute("type", newElemento);