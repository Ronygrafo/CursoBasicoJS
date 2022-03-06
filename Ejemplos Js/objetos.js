var miMoto = {
    marca: "Suzuki",
    linea: "GS",
    modelo: 2016,
/* METODO DE OBJETO */
    detallesMoto: function () {
        console.log(`Moto ${this.linea} ${this.modelo}`);}
    }


/* FUNCION CONSTRUCTORA */

function moto(marca, linea, modelo){
    this.marca = marca;
    this.linea = linea;
    this.modelo = modelo;
}

/* NUEVA INSTANCIA DE LA FUNCION CONSTRUCTORA */
var motoNueva = new moto ("Ducati", "Diablo", 2020);
var motoNuevisima = new moto ("Benneli", "TNT", 2022);