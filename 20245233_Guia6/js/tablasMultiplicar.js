// contenedor donde se mostrarán los estudiantes
const containerResultado = document.querySelector("#idContainerResultado")

// acceso a cada botón por medio de la API DOM
const btnCalcular = document.querySelector("#idBtnCalcular")

// click al botón calcular y su función
btnCalcular.addEventListener("click", calcularTabla);

function calcularTabla() {
    // capturando valor
    const inputTabla = document.querySelector("#inputTabla").value;

    // inicializamos contador
    let contador = 1;

    // verificar que el dato sea entero positivo
    if (inputTabla > 0) {
        let tabla = `<h2>Tabla de multiplicar del ${inputTabla}</h2>`;

        do {
            let resultado = contador * inputTabla;
            tabla += `<div class="row text-center">`;
            tabla += `<div class="col-md-1 colum"><h3>${contador}</h3></div>`;
            tabla += `<div class="col-md-1 colum-green"><h3>x</h3></div>`;
            tabla += `<div class="col-md-1 colum"><h3>${inputTabla}</h3></div>`;
            tabla += `<div class="col-md-1 colum-green"><h3>=</h3></div>`;
            tabla += `<div class="col-md-1 colum"><h3>${resultado}</h3></div>`;
            tabla += `</div>`;

            // incremento del contador para salir del bucle
            contador++;
        } while (contador <= 12);

        document.querySelector("#inputTabla").value = 1;
        document.querySelector("#inputTabla").focus();
        containerResultado.innerHTML = tabla;
    } else {
        alert("No se ha ingresado un número válido.");
    }
}