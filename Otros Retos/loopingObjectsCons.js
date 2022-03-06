var marca = [
    "Husqvarna",
    "Hero",
    "Honda",
    "Yamaha",
    "Kawasaki",
    "BMW",	
    "Trumph",
    "Royal",
    "Auteco",
    "Citroen",
    "Dacia",
    "Ferrari",
    "Fiat",
    "Ford",
    "Honda",
    "Infiniti",
    "Isuzu",
    "Iveco",
    "Jaguar"   	 	 
]

var linea = [
    "C-Max",
    "Fiesta",
    "Focus",
    "Mondeo",
    "Ka",
    "S-MA",
    "B-MAX",
    "Grand C-Max",
    "Tourneo Custom",
    "Kuga",
    "Galaxy",
    "Tiger",
    "Tourneo Connect",
    "EcoSport",
    "Tourneo Courier",
    "Mustang",
    "Transit Connect",
    "Edge",
    "Ka+"
]

var modelo = [
    "1988",
    "1989",
    "1978",
    "1989",
    "1928",
    "1989",
    "1968",
    "1989",
    "1888",
    "1989",
    "1288",
    "1989",
    "1938",
    "1989",
    "1988",
    "1999",
    "1983",
    "1989",
    "1918"
]

function moto(marca, linea, modelo){
    this.marca = marca;
    this.linea = linea;
    this.modelo = modelo;
}

for (var i = 0; marca.length > i && linea.length > i && modelo.length > i; i++){
    var nuevaMoto = new moto(marca[i], linea[i], modelo[i]);
    console.log(nuevaMoto)
}