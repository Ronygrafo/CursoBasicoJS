/* ECMAscript5 o Inferior */

console.log(miNombre)
var miNombre;
miNombre = "Rony";

/* LLAMAR VARIABLES SIN HABERLAS DECLARADO */


/* HOISTING EN FUNCIONES */

hey();

function hey() {
    console.log(miNombre)
}