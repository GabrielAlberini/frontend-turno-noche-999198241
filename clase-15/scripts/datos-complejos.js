// datos primitivos -> unidades singulares de información
// son inmutables -> no se pueden modificar

const name = "Gabriel"
const age = 31
const isAdult = false // boolean -> verdadero o falso

// datos complejos/compuesto -> estructura de datos almacenan un conjunto de datos
// son mutables -> se pueden modificar

// un array sirve para listar elementos
const listOfContacts = ["luciano", "ana", "federico"] // array
listOfContacts.push("jhoanna")

// objeto sirve para describir un elemento
// un objeto tiene propiedades y métodos (funciones)

// propiedad -> clave y valor
const contact = {
  name: "Gabriel",
  state: true,
  lastConnection: "left 7 mins ago",
  greet: function () {
    console.log("Hola!")
  }
}

const cart = ["pc", "table", "pencil", "phone"]

const products = [""]

// ---------------------------------------------------------

const contacts = [
  { name: "Vincent Porter", status: "offline", lastConnection: "7 mins ago" },
  { name: "Aiden Chavez", status: "online", lastConnection: "now" },
  { name: "Monica Ward", status: "online", lastConnection: "now" },
  { name: "Micaela Colman", status: "online", lastConnection: "1 min ago" },
];

console.log("Comienzo de bucle!")

// callback -> una función que se ejecuta despues de que pasa algo
// el callback se ejecuta en cada iteración

// EL ARRAY SIEMPRE TENDRÁ UN NOMBRE EN PLURAL Y EL ELEMENTO QUE ITERA EN SINGULAR
contacts.forEach(function (contact) {
  console.log("Vuelta nueva")
  console.log(contact.name)
})

// 1 - voy a ejecutar un bucle tantas veces como elementos haya en el array contacts
// 2 - en cada elemento ejecutaré un console.log que dice "hola"

console.log("Fin de bucle!")