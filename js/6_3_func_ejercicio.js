/* 
3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
luego crear una función para calcular su perímetro y mostrarlo por pantalla.
● La fórmula del perímetro es p = 2*(a +b)
D
*/
function perimetro(valorA,valorB){
 return perimetroRectangulo=2*(valorA+valorB);
}

let ladoA= parseInt(prompt('Ingrese el valor del lado A del rectangulo.'));
let ladoB=parseInt (prompt('Ingrese el valor del lado B del rectangulo.'));

document.write(`el valor del perimetro del rectangulo es:${perimetro(ladoA,ladoB)}`);