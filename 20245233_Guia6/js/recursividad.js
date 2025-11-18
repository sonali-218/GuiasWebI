const campo = document.getElementById("idTxtNumero");

// función anónima
const validarNumero = function (e) {
    let validar = /^[0-9]{1}$/;
    let tecla = e.key;

    if (!validar.test(tecla)) e.preventDefault();
}

// evento keypress
campo.addEventListener("keypress", validarNumero);

const boton = document.getElementById("idBtnCalcular");

// función para calcular el factorial de un número
function calcularFactorial(numero) {
    return numero < 2 ? 1 : numero * calcularFactorial(numero - 1);
}

// imprimir el resultado del factorial
const imprimir = (numero, resultado) => {
    const contenedor = document.getElementById("idDivResultado");
    contenedor.innerHTML = `El factorial de ${numero}! es ${resultado}`;
};

function calcular() {
    let numero = document.getElementById("idTxtNumero").value;
    if (numero != "") {
        let resultado = calcularFactorial(numero);
        imprimir(numero, resultado);
    } else {
        alert("Debe ingresar un número válido");
    }
}

// evento click
boton.addEventListener("click", calcular);