const entradaNumero = document.getElementById("numeroEntrada");
const entradaBase = document.getElementById("baseEntrada");

const salidaDecimal = document.getElementById("salidaDecimal");
const salidaBinario = document.getElementById("salidaBinario");
const salidaOctal = document.getElementById("salidaOctal");
const salidaHexadecimal = document.getElementById("salidaHexadecimal");

entradaNumero.addEventListener("input", convertir);
entradaBase.addEventListener("change", convertir);

function convertir() {
  const valor = entradaNumero.value.trim().toUpperCase();
  const base = parseInt(entradaBase.value);

  let decimal = convertirAdecimal(valor, base);
  if (isNaN(decimal)) {
    mostrarError();
    return;
  }

  salidaDecimal.textContent = decimal;
  salidaBinario.textContent = convertirDesdeDecimal(decimal, 2);
  salidaOctal.textContent = convertirDesdeDecimal(decimal, 8);
  salidaHexadecimal.textContent = convertirDesdeDecimal(decimal, 16);
}

function mostrarError() {
  salidaDecimal.textContent =
  salidaBinario.textContent =
  salidaOctal.textContent =
  salidaHexadecimal.textContent = "Entrada inválida";
}

// --- CONVERSIÓN A DECIMAL MANUAL ---
function convertirAdecimal(cadena, base) {
  const digitos = "0123456789ABCDEF";
  let decimal = 0;
  let potencia = cadena.length - 1;

  for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena[i];
    let valor = digitos.indexOf(caracter);
    if (valor === -1 || valor >= base) return NaN;

    decimal += valor * Math.pow(base, potencia);
    potencia--;
  }

  return decimal;
}

// --- CONVERSIÓN DESDE DECIMAL MANUAL ---
function convertirDesdeDecimal(numero, base) {
  const digitos = "0123456789ABCDEF";
  if (numero === 0) return "0";
  let resultado = "";

  while (numero > 0) {
    let residuo = numero % base;
    resultado = digitos[residuo] + resultado;
    numero = Math.floor(numero / base);
  }

  return resultado;
}
