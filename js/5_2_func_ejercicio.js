/*
2- Definir una función que muestre información sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la función
determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
por una mezcla de ambas.
*/

function cadenaDeTexto(cadena){

   if(cadena === cadena.toUpperCase()){
      return "La cadena esta formada por solo mayusculas";

    }
   else if(cadena === cadena.toLowerCase()){
       return "La cadena esta formada por solo minusculas";
   }
   else{
       return "La cadena esta formada por mayusculas y minusculas";
   }
}
let cadena=prompt('ingrese cadena de texto:'); 
document.write(cadenaDeTexto(cadena));
