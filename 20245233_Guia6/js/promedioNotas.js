// contenedor donde se muestran los estudiantes
const containerEstudiantes = document.querySelector("#idContainerEstudiantes");

// acceso al botón por medio de la API DOM
const btnPromedio = document.querySelector("#idBtnPromedio");

// click a los botones y la función que se ejecuta
btnPromedio.addEventListener("click", generarEstudiantes);

function generarEstudiantes() {
    // array para guardar la info del estudiante
    let arrayEstudiante = new Array();

    let totalEstudiantes = document.querySelector("#inputNumeroEstudiantes").value;
    let contador = 1;

    // while para recorrer el total de estudiantes
    let estudiante,
        calificacion,
        convertir =0;
    while (contador <= totalEstudiantes) {
        estudiante = prompt(`Ingrese el nombre del estudiante ${contador}`);

        // verificar número positivo y en el rango de 0 - 10
        do {
            calificacion = prompt(`Ingrese la calificación del estudiante ${contador}`);
            convertir = parseFloat(calificacion);

            if (isNaN(convertir) || convertir < 0 || convertir > 10) {
                alert("Ingrese una calificación válida (0-10)");
            }

        } while (isNaN(convertir) || convertir < 0 || convertir > 10);

        // asignando valores al arreglo
        arrayEstudiante[contador - 1] = new Array(estudiante, parseFloat(calificacion).toFixed(2));
        contador++;
    }

    // for ... of
    // promedio y quien tiene la nota más alta
    let calificacionAlta = 0,
        promedio = 0,
        posicion = 0;
    
    let listado = "<h3>Listado de estudiantes registrados</h3>";
    listado += "<ol>";
    for (let indice of arrayEstudiante) {
        let nombre = indice[0];
        let nota = parseFloat(indice[1]);
        // imprimir lista de estudiantes
        listado += `<li><b>Nombre:</b> ${nombre} - <b>Calificación:</b> ${nota}</li>`;

        // verificación nota alta
        if (nota > calificacionAlta) {
            calificacionAlta = nota;
            posicion = indice;
        }

        // calcular promedio
        promedio += parseFloat(nota);
    }

    listado += "</ol>";
    promedio = parseFloat(promedio/arrayEstudiante.length).toFixed(2);
    listado += `<p><b>Promedio de calificaciones:</b> ${promedio}`;
    listado += `<br><b>Estudiante con mejor calificación:</b> ${posicion[0]}</p>`;

    // imprimir resultado
    containerEstudiantes.innerHTML = listado;
}