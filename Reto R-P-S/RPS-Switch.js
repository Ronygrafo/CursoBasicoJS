var resultado;
var mensaje = resultado ? "Gana Player 1" : "Gana CPU";

var player;
var cpu;

/* SI PLAYER NO GANA O EMPATA, PIERDE */
switch (player, cpu){
    case player = cpu:
        console.log("Empate")
        break;
    case "Tijeras", "Papel":
        resultado = true
        console.log(mensaje)
        break;
    case "Papel", "Piedra":
        resultado = true
        console.log(mensaje)
        break;
    case "Piedra", "Tijeras":
        resultado = true
        console.log(mensaje)
        break;
    default:
        resultado = false
        console.log(mensaje)
        break;
}