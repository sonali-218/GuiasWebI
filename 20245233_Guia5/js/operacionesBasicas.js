// acceder al párrafo que nos permitiría imprimir el resultado
const parrafo = document.querySelector("#idParrafo");
console.log(parrafo);

// acceder a los botones por medio de la API DOM
const btnSumar = document.querySelector("#idBtnSumar");
const btnRestar = document.querySelector("#idBtnRestar");
const btnMultiplicar = document.querySelector("#idBtnMultiplicar");
const btnDividir = document.querySelector("#idBtnDividir");

// agregamos el evento link y la operación correspondiente
btnSumar.addEventListener("click", sumar);
btnRestar.addEventListener("click", restar);
btnMultiplicar.addEventListener("click", multiplicar);
btnDividir.addEventListener("click", dividir);

// variable que guardará el resultado
let resultado;

// función de operaciones
function sumar() {
    let numero1 = parseFloat(prompt("Ingrese el primer número a sumar:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número a sumar:"));
    resultado = numero1 + numero2;
    parrafo.innerHTML = `${numero1} + ${numero2} = ${resultado}`;
}

function restar() {
    let numero1 = parseFloat(prompt("Ingrese el primer número a restar:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número a restar:"));
    resultado = numero1 - numero2;
    parrafo.innerHTML = `${numero1} - ${numero2} = ${resultado}`;
}

function multiplicar() {
    let numero1 = parseFloat(prompt("Ingrese el primer número a multiplicar:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número a multiplicar:"));
    resultado = numero1 * numero2;
    parrafo.innerHTML = `${numero1} * ${numero2} = ${resultado}`;
}

function dividir() {
    let numero1 = parseFloat(prompt("Ingrese el primer número a dividir:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número a dividir:"));
    let mensaje;
    if (numero2 != 0) {
        resultado = numero1 / numero2;
        mensaje = `${numero1} / ${numero2} = ${resultado}`;
    } else {
        mensaje = `El valor ${numero1} / ${numero2} no se puede dividir`;
    }

    parrafo.innerHTML = mensaje;
}