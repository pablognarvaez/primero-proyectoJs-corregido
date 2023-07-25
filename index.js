// NOMBRE Y APELLIDO
const nombreyapellidoEsperado = ("Juan Perez"); // Nombre y apellido esperado
let nombreyapellidoIngresado;

do {
    nombreyapellidoIngresado = prompt("Ingrese su Nombre y Apellido");
    if (nombreyapellidoIngresado === nombreyapellidoEsperado) {
        console.log("Nombre y apellido correctos.");
        console.log(typeof nombreyapellidoIngresado);

        // LEGAJO DEL CLIENTE
        let intentos = 4;
        let numeroDeCliente = Number(prompt("Ingrese su número de Legajo Mayor a 1750"));
        console.log(numeroDeCliente);
        console.log(typeof numeroDeCliente);

        while (numeroDeCliente < 1750 && intentos > 1) {
            console.log("Número de Legajo Inexistente, por favor intente de nuevo!");
            numeroDeCliente = Number(prompt("Ingrese su número de Legajo Mayor o igual a 1750"));
            intentos--;
        }

        if (numeroDeCliente >= 1750) {
            console.log("Puede Loguearse");
            document.write("Bienvenido de nuevo " + nombreyapellidoIngresado);

            // Consigna 3: Simulador interactivo (juego de adivinanzas)
            const numeroSecreto = Math.floor(Math.random() * 10) + 1;
            let intentosAdivinanza = 10;

            while (intentosAdivinanza > 0) {
                const adivinanza = parseInt(prompt("Adivina el número secreto (entre 1 y 10):"));

                if (adivinanza === numeroSecreto) {
                    alert("¡Felicitaciones! Has adivinado el número secreto.");
                    break; // Salir del juego si adivina correctamente
                } else {
                    intentosAdivinanza--;
                    alert("Incorrecto. Te quedan " + intentosAdivinanza + " intentos.");
                }
            }

            if (intentosAdivinanza === 0) {
                alert("Se te acabaron los intentos. El número secreto era " + numeroSecreto + ".");
            }
        } else {
            console.log("Número de Legajo Incorrecto. Intente nuevamente.");
            document.write("Número de Legajo Incorrecto. Intente nuevamente.");
        }
    } else {
        alert("Nombre y apellido incorrectos. Ingrese el nombre y apellido correctos.");
        console.log("Nombre y apellido incorrectos. Ingrese el nombre y apellido correctos.");
        document.write("Nombre y apellido incorrectos. Ingrese el nombre y apellido correctos.");
    }
} while (nombreyapellidoIngresado !== nombreyapellidoEsperado);