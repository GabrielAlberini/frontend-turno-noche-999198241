// variable
// espacio reservado en memoria

// declarar una variable
const name = "Gabriel";
let gustoDeHeladoFav = "crema del cielo";

// console.log(gustoDeHeladoFav)

// reasignación
gustoDeHeladoFav = "Kinoto al whisky";

// console.log(gustoDeHeladoFav)

//------------------------------------------------------------

const num1 = 1;
const num2 = 2;

// evalución Javascript
const resultado = num1 + num2;

// console.log(resultado)

// ---------------------------------------------------------
const p = document.querySelector("#result")

const n1 = Number(prompt("Ingrese el primer número:"))
const n2 = Number(prompt("Ingrese el segundo número:"))

const result = n1 + n2;

// concatenación
// p.textContent = "El resultado es" + " " + result; // forma tradicional

// template string
p.textContent = `El resultado es ${result}.`; // ctrl + alt + } -> alt + 96

