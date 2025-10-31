// Generar número random
const numeroAleatorio = Math.floor(Math.random() * 25) + 1;

// Variable con max de intentos
const numeroIntentos = 3;

// Guardar intentos del usuario
let intentos = 1;
function generarNumeroAleatorio() {
    let mensaje;
    const parrafo = document.querySelector("#idParrafo");

    // verificar intento del usuario
    if (intentos <= numeroIntentos) {
        let numero = prompt(
            "Qué número se ha generado (Intento " + intentos + ")?"
        );

        // verificar número ingresado
        if (numero == numeroAleatorio) {
            mensaje = `Es sorprendente, pudiste adivinar el número oculto (${numeroAleatorio}). Refresque la página para volver a jugar.`;
        } else if (intentos == numeroIntentos) {
            mensaje = `Su número de intentos ha terminado. El número oculto era: ${numeroAleatorio}. Refresque la página para volver a jugar.`;
        } else if (numero < numeroAleatorio) {
            mensaje = `El número oculto es mayor. Vuelve a intentar. Quedan ${
                numeroIntentos - intentos
            } intentos.`;
        } else if (numero > numeroAleatorio) {
            mensaje = `El número oculto es menor. Vuelve a intentar. Quedan ${
                numeroIntentos - intentos
            } intentos.`;
        } else {
            mensaje = `Vuelve a intentar. Quedan ${numeroIntentos - intentos
            } intentos.`;
        }

        // aumentamos el valor de los intentos
        intentos++;
    }   else {
        mensaje = `Su número de intentos ha terminado. 
        El número oculto era: ${numeroAleatorio}. Refresque la página para volver a jugar.`;
    }

    parrafo.innerHTML = mensaje;

}