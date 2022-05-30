/*
2- Definir una función que muestre información sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la función
determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
por una mezcla de ambas.
*/
//incompleto
function esMayuscula(letra)
{
    return letra === letra.toUpperCase();
}

function esMinuscula(letra)
{
    return letra === letra.toLowerCase();
}   
let cadena=prompt('ingrese cadena de texto:'); 
for(var i = 0; i < cadena.length; i++)
{
    var letraActual = cadena.charAt(i);
    if(esMayuscula(letraActual))
    {
        alert("La letra " + letraActual + " es mayúscula");
    }

    if(esMinuscula(letraActual))
    {
        alert("La letra " + letraActual + " es minúscula");
    }       
}