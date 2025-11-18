document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("formEstudiante");

    // Expresiones regulares
    const regexCarnet = /^[A-Za-z]{2}\d{3}$/;
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
    const regexDUI = /^\d{8}-\d$/;
    const regexNIT = /^\d{4}-\d{6}-\d{3}-\d$/;
    const regexFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexEdad = /^\d+$/;

    // Inputs
    const carnet = document.getElementById("carnet");
    const nombre = document.getElementById("nombre");
    const dui = document.getElementById("dui");
    const nit = document.getElementById("nit");
    const fecha = document.getElementById("fecha");
    const correo = document.getElementById("correo");
    const edad = document.getElementById("edad");

    // Placeholders dinámicos
    const inputs = [carnet, nombre, dui, nit, fecha, correo, edad];

    inputs.forEach(input => {
        const base = input.placeholder;
        input.addEventListener("focus", () => input.placeholder = "");
        input.addEventListener("blur", () => input.placeholder = base);
    });

    // Validación al enviar
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let valido = true;

        if (!validar(carnet, regexCarnet)) valido = false;
        if (!validar(nombre, regexNombre)) valido = false;
        if (!validar(dui, regexDUI)) valido = false;
        if (!validar(nit, regexNIT)) valido = false;
        if (!validar(fecha, regexFecha)) valido = false;
        if (!validar(correo, regexCorreo)) valido = false;
        if (!validar(edad, regexEdad)) valido = false;

        if (valido) {
            alert("✔ Todos los campos están validados correctamente.");

            // Limpiar formulario
            form.reset();

            // Quitar clases de validación
            inputs.forEach(input => {
                input.classList.remove("is-valid");
                input.classList.remove("is-invalid");
            });
        }
    });

    function validar(campo, regex) {
        if (regex.test(campo.value.trim())) {
            campo.classList.remove("is-invalid");
            campo.classList.add("is-valid");
            return true;
        } else {
            campo.classList.remove("is-valid");
            campo.classList.add("is-invalid");
            return false;
        }
    }

});