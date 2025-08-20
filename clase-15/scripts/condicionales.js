// En programación, un condicional es una estructura que permite tomar decisiones dentro del código. Dependiendo de si una condición es verdadera o falsa, el programa ejecutará diferentes bloques de instrucciones.

// function
// forEach

// palabra reservada | condición | scope -> zona privada

const nombre = "Gabriel"

// if (nombre.includes("h")) {
//   console.log("contiene!")
// } else {
//   console.log("no contiene")
// }


// const opcionHumano = prompt("Elige: cara o seca")
const opcionesPc = ["cara", "seca"]
// elección aleatoria de la pc
const opcionPc = opcionesPc[Math.floor(Math.random() * opcionesPc.length)]

// if (opcionHumano === opcionPc) {
//   console.log("Ganaste")
// } else {
//   console.log("Perdiste :(")
// }

// const color = prompt("¿De qué color está el semaforo?")

// if (color === "verde") {
//   console.log("puedes pasar")
// } else if (color === "rojo") {
//   console.log("no puedes pasar")
// } else if (color === "amarillo") {
//   console.log("ten cuidado...")
// } else {
//   console.log("no es un color valido")
// }

// = 10 -> excelente
// > 8 -> muy bueno
// = 6 -> aprobado
// < 6 -> desaprobado

// const nota = 10000000000000

// if (nota === 10) {
//   console.log("Excelente")
// } else if (nota >= 8 && nota < 10) {
//   console.log("Muy bueno")
// } else if (nota >= 6 && nota < 8) {
//   console.log("Aprobado")
// } else if (nota < 6 && nota > 0) {
//   console.log("Desaprobado")
// } else {
//   console.log("fijate que te corrijieron mal...")
// }

// operador ternario
const carnet = false

// if (carnet === true) {
//   console.log("Podes conducir")
// } else {
//   console.log("No podes conducir")
// }

carnet === true ? console.log("puedes conducir") : console.log("no puedes conducir")


const theme = "light"

theme === "dark" ? console.log("<h1 class='title-dark'></h1>") : console.log("<h1 class='title'></h1>")