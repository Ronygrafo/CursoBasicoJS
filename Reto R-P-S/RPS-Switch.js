var player = "Piedra";
var cpu = "Tijeras";

/* VALIDAR EL STRING GENERADO */
switch (player + cpu){
    case "PiedraPiedra":
    case "TijerasTijeras":
    case "PapelPapel":
        console.log("Empate")
        break;
    case "PiedraTijeras":
    case "TijerasPapel":
    case "PapelPiedra":
        console.log("Ganas")
        break;
/* SI NO GANA O EMPATA, DEFINITIVAMENTE PIERDE */
    default:
        console.log("Pierdes")
        break;
}