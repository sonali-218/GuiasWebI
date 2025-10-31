// alert - mensaje en pantalla + botón de aceptar
// prompt - mensaje en pantalla + campo de texto + botón aceptar/cancelar
// confirm - mensaje en pantalla + botón aceptar/cancelar

function aviso() {
    alert("Bienvenido al mundo JavaScript");
}

function confirmacion() {
    // valores a almacenar posibles: true o false
    let confirmacion = confirm("¿Desea salir de la sesión?");
    // imprimir una variable en una cadena
    alert(`Valor seleccionado ${confirmacion}`);
}

function capturarDatos() {
    let nombre = prompt("¿Cuál es su nombre?");
    // en el campo de prompt se mostrará 0 por defecto
    let edad = prompt("¿Cuál es su edad?", 0);
    alert(`Su nombre es ${nombre} y su edad es ${edad}`);
}

function dibujarParrafo() {
    let parrafo = prompt("Escriba la información que desea visualizar en el párrafo");
    // usaremos la API DOM para acceder al elemento que hemos creado en nuestro documento HTML <p id="idParrafo"></p>
    const p = document.querySelector("#idParrafo");
    p.innerHTML = parrafo;
}