/* 
2- Crear un script que solicite al usuario mediante un prompt el nombre de
ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
debe mostrar el arreglo generado, luego realizar las siguientes acciones:
● Mostrar la longitud del arreglo.
● Mostrar en el documento web los ítems de las posiciones primera, tercera y
última.
● Añade en última posición la ciudad de París.
● Escribe por pantalla el elemento que ocupa la segunda posición.
● Sustituye el elemento que ocupa la segunda posición por la ciudad de
'Barcelona'.
*/
let ciudades = [];
let posicion = 0;
let ciudad = 0;

do {
  ciudad = prompt("ingrese nombre de una ciudad");

  if (isNaN(ciudad) == false) {
    // si la variable ciudad contiene un numero, la funcion 'isNaN' devuelve "false".
    alert(`valor no admisible`);
  } else {
    ciudades[posicion] = ciudad;
    posicion++;
  }
} while (confirm(`desea introducir el nombre de una ciudad?`) == true);

for (let contador = 0; contador < ciudades.length; contador++) {
  document.write(`${ciudades[contador]}<br>`);
}
document.write("<hr>");
/*
● Mostrar la longitud del arreglo.
*/
document.write(`el tamaño del arreglo es: ${ciudades.length}<br>`);
document.write("<hr>");
/*
● Mostrar en el documento web los ítems de las posiciones primera, tercera y
última.
*/
document.write(`mostramos las posiciones:<br><br>Primera:${
  ciudades[0]
}<br>Tercera:${ciudades[2]}<br>
 Ultima:${ciudades[ciudades.length - 1]}<br>`);
document.write("<hr>");
/*
● Añade en última posición la ciudad de París.
*/
document.write(`agregamos Paris al ultimo elemento del arreglo:<br>`);
ciudades.push("Paris");
for (let contador = 0; contador < ciudades.length; contador++) {
  if (ciudades[contador] == undefined) {
    document.write(`${(ciudades[contador] = "")}<br>`);
  }
  document.write(`${ciudades[contador]}<br>`);
}
document.write("<hr>");
/*
● Escribe por pantalla el elemento que ocupa la segunda posición.
*/
document.write(
  `Èl elemento que ocupa la segunda posicion es:${ciudades[1]} <br>`
);
document.write("<hr>");
/*
● Sustituye el elemento que ocupa la segunda posición por la ciudad de
'Barcelona'.
*/
ciudades.splice(1, 0, "Barcelona");
document.write(
  `Èl elemento que ocupa la segunda posicion  ahora es:${ciudades[1]} <br>`
);
