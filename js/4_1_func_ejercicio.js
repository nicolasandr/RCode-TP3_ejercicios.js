/*
1- Escribir el código de una función a la que se pasa como parámetro un número
entero y devuelve como resultado una cadena de texto que indica si el número es
par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/
function numComoParametro(numrecibido) {
  let par = "El numero es par";
  let impar = "El numero es impar";

  if (numrecibido % 2 == 0) {
    return par;
  } else {
    return impar;
  }
}

let numero = prompt("ingrese un numero: <br> ");
document.write(`${numComoParametro(numero)}`);
