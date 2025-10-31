// Creación de tablas usando concatenación de cadenas
let table = "<table>";
table += "<thead>";
table += "<tr>";
table += "<th scope='col'>#</th>";
table += "<th scope='col'>Nombre</th>";
table += "<th scope='col'>Apellido</th>";
table += "<th scope='col'>Correo electrónico</th>";
table += "</tr>";
table += "</thead>";
table += "<tbody>";

// Datos de alumnos
const alumnos = [
    { id: 1, nombre: "Alisson Denisse", apellido: "Quijano Guzmán", correo: "ali.pelona@gmail.com"},
    { id: 2, nombre: "Lorena Alejandra", apellido: "Arriola", correo: "alejandra12@gmail.com"},
    { id: 3, nombre: "Christian Odir", apellido: "Renderos", correo: "chrisren09@gmail.com"},
    { id: 4, nombre: "Melisa Eugenia", apellido: "Rivas Linares", correo: "rivas_mel@gmail.com"},
    { id: 5, nombre: "Gabriel", apellido: "Martínez", correo: "gabopro@gmail.com"},
];

// Agregar filas de los datos al cuerpo de la tabla
alumnos.forEach(alumno => {
    table += "<tr>";
    table += `<td scope='row'>${alumno.id}</td>`;
    table += `<td>${alumno.nombre}</td>`;
    table += `<td>${alumno.apellido}</td>`;
    table += `<td>${alumno.correo}</td>`;
    table += "</tr>";
})

table += "</tbody>";
table += "</table>";

// Agregar la tabla al contenedor
const contenedor = document.querySelector("#idContenedor");
contenedor.innerHTML = table;

// este script se está cargando antes de que termine la carga del HTML, esto hace que el DOM no esté disponible al momento de ejecutar