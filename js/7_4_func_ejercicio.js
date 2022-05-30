/*
4- Escriba un script que muestre la tabla de multiplicar de un número ingresado
por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
solo los resultados del 1 al 10 del número elegido por el usuario.
*/
function tabla(numeroIngresado,llamadasAFuncion){
    return producto=numeroIngresado*llamadasAFuncion;
}

let numeroIngresado=0;
do{
   numeroIngresado=parseInt(prompt('Ingrese un numero del 1 al 10:'));
}while(numeroIngresado<1 || numeroIngresado>10);
document.write(`El numero ingresado es: ${numeroIngresado} y su tabla es:<br>`);
for(let llamadasAFuncion=1; llamadasAFuncion<=10;llamadasAFuncion++ ){
document.write(`${numeroIngresado}x${llamadasAFuncion} = ${tabla(numeroIngresado,llamadasAFuncion)}<br>`);
}
