document.addEventListener('DOMContentLoaded', function() {
    // contenedor para mostrar estudiantes
    const containerEstudiantes = document.querySelector("#idContainerEstudiantes");

// acceso a cada botón
    const btnAddEstudiante = document.querySelector("#idBtnAgregarEstudiante");
    const btnViewEstudiantes = document.querySelector("#idBtnMostrarEstudiantes");

// click a los botones + función que realizará
    btnAddEstudiante.addEventListener("click", addEstudiantes);
    btnViewEstudiantes.addEventListener("click", viewEstudiantes);

// arreglo global
let arrayEstudiantes = new Array();

// creando funciones
    function addEstudiantes() {
        const inputCarnet = document.querySelector("#inputCarnet").value.toString().toUpperCase();
        const inputNombre = document.querySelector("#inputNombre").value.toString().toUpperCase();
        const inputApellidos = document.querySelector("#inputApellidos").value.toString().toUpperCase();

        if (inputCarnet != "" && inputNombre != "" && inputApellidos != "") {
            arrayEstudiantes.push(
                new Array(inputCarnet, inputNombre, inputApellidos)
            );
            alert("Se registro el nuevo estudiante");

            // limpiando campos
            document.querySelector("#inputCarnet").value = "";
            document.querySelector("#inputNombre").value = "";
            document.querySelector("#inputApellidos").value = "";
            document.querySelector("#inputCarnet").focus();
        } else {
            alert("Faltan campos que completar");
        }
    }

    function viewEstudiantes() {
        // validando si hay estudiantes
        let totalEstudiantes = arrayEstudiantes.length;
        if (totalEstudiantes > 0) {
            let carnet;
            let nombres;
            let apellidos;
            let table = "<table class='table table-light table-striped'>";
            table += "<thead>";
            table += "<tr>";
            table += "<th scope='col' style='width: 5%;'>#</th>";
            table += "<th scope='col' style='width: 15%;'>Carnet</th>";
            table += "<th scope='col'>Nombres</th>";
            table += "<th scope='col'>Apellidos</th>";
            table += "<tr>";
            table += "<thead>";
            table += "<tbody>";

            // bucle para recorrer el arreglo de estudiantes
            for (let i=0; i<arrayEstudiantes.length; i++) {
                // accediendo a las posiciones del arreglo
                carnet = arrayEstudiantes[i][0];
                nombres = arrayEstudiantes[i][1];
                apellidos = arrayEstudiantes[i][2];

                table += `<tr>`;
                table += `<th scope='row' style='font-weight: bold;'>${i + 1}</th>`;
                table += `<td>${carnet}</td>`;
                table += `<td>${nombres}</td>`;
                table += `<td>${apellidos}</td>`;
                table += `</tr>`;
            }

            table += "</tbody>";
            table += "</table>";
            containerEstudiantes.innerHTML = table;
        } else {
            alert("No se han registrado estudiantes");
        }
    }
});