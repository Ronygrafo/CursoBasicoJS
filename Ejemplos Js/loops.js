var estudiantes = ["Maria", "Rosa", "Sergio", "Daniel"];

function saludar(estudiante) {
    console.log(`hola, ${estudiante}`)
}

for (var estudiante of estudiantes) {
    saludar(estudiante)
}