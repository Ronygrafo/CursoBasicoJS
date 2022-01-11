var resultado;
var mensaje = resultado ? "Gana Player 1" : "Gana CPU";

var player;
var cpu;

/* PRIMERO COMPRAR SI HAY EMPATE */
if (player == cpu) {
    mensaje = "EMPATE"

/* SI NO HAY EMPATE, PLAYER GANA SI... */
} else if (player == "Tijeras" && cpu == "Papel") {
    resultado = true
} else if (player == "Papel" && cpu == "Piedra") {
    resultado = true
} else if (player == "Piedra" && cpu == "Tijeras") {
    resultado = true
} else { resultado = false}
/* DE LO CONTRARIO, PLAYER PIERDE */

mensaje