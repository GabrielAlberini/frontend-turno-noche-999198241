// 2 - Clasificar temperatura
// Escribe una función que reciba una temperatura y muestre: "Frío" si es menor a 10 "Templado" si está entre 10 y 25 "Caluroso" si es mayor a 25

// Solución literal
// Mostrar textualmente el estado de la temp

// Solución algóritmica
// 1 - Declarar una función -> clasificarTemperatura()
// 2 - Declarar el nombre del parametro -> temperatura
// 3 - Declarar un if -> evaluar la temperatura y mostrar un resultado referente
// 4 - Invocar la función y pasar los argumentos necesarios

function clasificarTemperatura(temperatura) {
  if (temperatura < 10) {
    console.log("Frio")
  } else if (temperatura >= 10 && temperatura <= 25) {
    console.log("Templado")
  } else if (temperatura > 25 && temperatura < 45) {
    console.log("Caluroso")
  } else {
    console.log("Temperatura incorrecta")
  }
}

let temp = 12309182031082

clasificarTemperatura(temp)

// Verificar par o impar Escribe una función que reciba un número y determine si es par o impar.

// Solución literal
// Mostrar si un número es par o impar

// Solución algorítmica
// 1 - Declarar una función -> verificarParOImpar()
// 2 - Declarar el nombre del parámetro -> numero
// 3 - Declarar el condicional
// 4 - Mostrar mensaje referente

// Cuanto me resta al dividir x número por 2? -> 2 / 2 -> 0
//                                            -> 3 / 2 -> 1
//                                            -> 12 / 2 -> 0

function verificarParOImpar(numero) {
  numero % 2 === 0 ? console.log("Es par") : console.log("Es impar")
}

verificarParOImpar(14)

// Determinar el mayor de dos números Escribe una función que reciba dos números y muestre cuál es mayor, o si son iguales.

function compararNumeros(numero1, numero2) {
  if (numero1 > numero2) {
    console.log("El número uno es mayor")
  } else if (numero1 < numero2) {
    console.log("El número dos es mayor")
  } else {
    console.log("Los números son iguales")
  }
}

compararNumeros(2, 2)

// Validar contraseña Escribe una función que reciba una contraseña y valide si es correcta (elige cualquier palabra como contraseña válida).



function validarContrasenia(contrasenia) {
  const contraseniaSecreta = "pepe123"

  if (contrasenia === contraseniaSecreta) {
    console.log("Usuario validado")
  } else {
    console.log("Usuario no validado")
  }
}

validarContrasenia("pepe124")

// Verificar acceso a descuento 
// Escribe una función que reciba la edad de una persona y determine si tiene acceso a un descuento (mayores de 60 o menores de 12).

function verificarDescuento(edad) {
  edad > 60 || edad < 12 ? console.log("Tienes el descuento") : console.log("No tienes el descuento")
}

verificarDescuento(30)