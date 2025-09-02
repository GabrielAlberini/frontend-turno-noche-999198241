// POO
// programación orientada a objetos

// representar una entidad
// una entidad es algo que existe y puede identificarse como una unidad distinta e independiente

// propiedades -> una caracteristica -> clave / valor
// metodos -> acción de la entidad
const auto = {
  marca: "Renault",
  puertas: 5,

  presentacion: function () {
    const saludo = `El auto elegido es el ${this.marca} de ${this.puertas} puertas`
    return saludo
  }
}

console.log(auto)

auto.puertas = 4 // reasignacion de propiedad

console.log(auto.presentacion(), "<- vez 2°")

console.log(auto.puertas)

// paradigma de programación
// un paradigma es un modelo, patrón o ejemplo ampliamente aceptado por una comunidad (especialmente científica) que establece un marco de creencias, valores, conceptos y métodos para comprender la realidad y resolver problemas

// una forma de resolver problemas

// POO, imperativa o declarativa

// imperativa
let saldo = 1000

// declaración de funciones
// parámetro -> dinero
const depositar = (dinero) => {
  saldo += dinero
}

const retirar = (dinero) => {
  saldo -= dinero
}

depositar(200)

retirar(900)

console.log(`El saldo es de $${saldo}`)

// ----------------------------------------------------------

// fabrica de objetos
// definir la entidad -> Cuenta

// con class se define un molde o modelo
class Cuenta {
  constructor(saldo, nombreCompleto) {
    this.saldo = saldo
    this.nombreCompleto = nombreCompleto
  }

  info() {
    return `Esta cuenta pertenece a ${this.nombreCompleto} y su saldo es de $${this.saldo}.`
  }

  depositar(dinero) {
    this.saldo += dinero
  }

  retirar(dinero) {
    this.saldo -= dinero
  }

  transferir(dinero, cuentaDestino) {
    if (dinero <= this.saldo) {
      this.retirar(dinero)
      cuentaDestino.depositar(dinero)
    } else {
      return "No cuentas con el dinero suficiente."
    }
  }
}

const cuentaGabriel = new Cuenta(1000, "Gabriel Carlos Alberini")
console.log(cuentaGabriel)

cuentaGabriel.depositar(100)

console.log(cuentaGabriel.saldo)

const cuentaMicaela = new Cuenta(800, "Micaela Colman")
console.log(cuentaMicaela)

cuentaGabriel.transferir(500, cuentaMicaela)

console.log(cuentaMicaela.saldo)
console.log(cuentaGabriel.saldo)