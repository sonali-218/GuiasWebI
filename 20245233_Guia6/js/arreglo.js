// contenedor donde estarán los estudiantes
const containerArreglo = document.querySelector("#idContainerArreglo");
const containerArregloOrdenado = document.querySelector("#idContainerArregloOrdenado");

// accedemos a los botones
const btnAgregar = document.querySelector("#idBtnAgregar");
const btnOrdenar = document.querySelector("#idBtnOrdenar");

// agregar el click y sus funciones
btnAgregar.addEventListener("click", agregarElemento);
btnOrdenar.addEventListener("click", ordenarElementos);

let arreglo = new Array();

function agregarElemento() {
    const numero = parseInt(document.querySelector("#inputNumero").value);

    // verificando que sea un número
    if (isNaN(numero)) {
        alert("Debe ingresar un número válido");
    } else {
        // nuevo elemento al arreglo
        arreglo.push(numero);

        // API DOM para crear un elemento html
        // creamos un div
        let caja = document.createElement("div");
        // agregamos una clase
        caja.className = "col-md-1 colum";
        // creamos elementos h3
        let valor = document.createElement("h3");
        // agregamos texto al h3
        valor.textContent = numero;
        // pasamos como hijo el h3 al div
        caja.appendChild(valor);

        // usamos beforeend para agregar al final del contenedor
        containerArreglo.insertAdjacentElement("beforeend", caja);
    }
}

function ordenarElementos() {
    // sort para arreglarlo y un for...of para recorrerlo
    for (let i of arreglo.sort()) {
        let caja = document.createElement("div");
        caja.className = "col-md-1 colum-green";
        let valor = document.createElement("h3");
        valor.textContent = i;
        caja.appendChild(valor);
        containerArregloOrdenado.insertAdjacentElement("beforeend", caja);
    }
}