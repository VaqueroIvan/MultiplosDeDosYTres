// Consigna: Molstrar múltiplos de dos y de tres

// Variables que conozco:
const cotaInferior: number = 1;
const cotaSuperior: number = 100;

// Variables que no conozco:
let esMultiploDeDos: boolean;
let esMultiploDeTres: boolean;
let multiplos: string = "";

for (let i = cotaInferior; i <= cotaSuperior; i++) {
  esMultiploDeDos = i % 2 === 0;
  esMultiploDeTres = i % 3 === 0;
  if (esMultiploDeDos || esMultiploDeTres) {
    multiplos += " " + i;
  }
}
console.log(
  "Los múltiplos entre " +
    cotaInferior +
    " y " +
    cotaSuperior +
    " son: " +
    multiplos
);
