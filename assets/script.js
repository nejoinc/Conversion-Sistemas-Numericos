console.log("funciona?")
const entradaNumero = document.getElementById("numeroEntrada");
const entradaBase = document.getElementById("baseEntrada");
const salidaDecimal = document.getElementById("salidaDecimal");
const salidaBinario = document.getElementById("salidaBinario");
const salidaOctal = document.getElementById("salidaOctal");
const salidaHexadecimal = document.getElementById("salidaHexadecimal");

function convertirNumero() {
    const valorIngresado = entradaNumero.value.trim().toUpperCase();
    const baseSeleccionada = parseInt(entradaBase.value);
    let numero;

    try {
        numero = parseInt(valorIngresado, baseSeleccionada);
        if (isNaN(numero)) throw "Entrada inválida";
        
        salidaDecimal.textContent = numero;
        salidaBinario.textContent = numero.toString(2);
        salidaOctal.textContent = numero.toString(8);
        salidaHexadecimal.textContent = numero.toString(16).toUpperCase();
    } catch {
        salidaDecimal.textContent =
        salidaBinario.textContent =
        salidaOctal.textContent =
        salidaHexadecimal.textContent = "Entrada inválida";
    }
}

entradaNumero.addEventListener("input", convertirNumero);
entradaBase.addEventListener("change", convertirNumero);