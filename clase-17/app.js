// declaración de función
// declaración de parametros
function saludar(nombre) {
  const saludo = `Hola ${nombre}`
  return saludo
}

// invocación de función
// "Gabriel" es un argumento que va a ser del parametro nombre
const saludoGenerado = saludar("Gabriel")
// console.log(saludoGenerado)

function saludarGritando(saludo) {
  console.log(saludo.toUpperCase() + "!!!")
}

// saludarGritando(saludoGenerado)

// ----------------------------------------------------------

// 1 - palabra reservada
// 2 - condición - pregunta -> true o false
// 3 - si la condición da true se ejecuta el scope (zona privada) del if

const tieneCarnet = true
const esMayorDeEdad = false

if (tieneCarnet && esMayorDeEdad) {
  console.log("Puede manejar")
} else {
  console.log("No puede manejar")
}

// -------------------------------------------------------

const colores = ["blue", "red", "white"]

// colores.push("violet")

// console.log(colores)

// colores.unshift("black")

// colores.pop()
// console.log(colores)

// colores.shift()
// console.log(colores)

console.log(colores)

colores.splice(1, 2)

console.log(colores)

// ------------------------------------------------------------

const usuario = {
  nombre: "Lucas",
  edad: 32,
  propiedad: "test"
}

const propiedad = "edad"

console.log(usuario[propiedad])