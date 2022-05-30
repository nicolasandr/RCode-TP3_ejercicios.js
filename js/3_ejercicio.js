/*
3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la
función Math.random para obtener números aleatorios entre 1 y 6 para cada uno
de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces
esta operación.
*/
let sumaDados = [];
let incrementosDeLaSuma = 0;
/*se almacenan las sumatorias mientras se recorre el arreglo*/
for (let incremento = 0; incremento < 50; incremento++) {
  let dado1 = Math.round(Math.random() * (6 - 1) + parseInt(1));
  let dado2 = Math.round(Math.random() * (6 - 1) + parseInt(1));
  sumaDados[incremento] = dado1 + dado2;
}
/*el for anidado compara las sumatorias del arreglo con las 12 sumatorias 
posibles y al final del segundo for,e imprime para cada caso*/
for (let sumatoriaPosible = 2; sumatoriaPosible <= 12; sumatoriaPosible++) {
  for (let recorridoArreglo = 0; recorridoArreglo < 50; recorridoArreglo++) {
    if (sumatoriaPosible == sumaDados[recorridoArreglo]) {
      incrementosDeLaSuma++;
    }
  }
  document.write(
    `la sumatoria: ${sumatoriaPosible} aparecio ${incrementosDeLaSuma} veces<br>`
  );
  incrementosDeLaSuma = 0;
}
