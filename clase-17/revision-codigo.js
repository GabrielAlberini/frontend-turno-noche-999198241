// ejercicio 1
let numbers = [2, 1, 4, 6, 8, 10];

numbers.forEach(num => {
  if (num % 2 === 0) {
    console.log(num + " es par");
  } else {
    console.log(num + " es impar");
  }
});

// ejercicio 2
function calculateDiscount(price, discount) {
  let finalPrice;

  // solucionar el caso de no éxito primero
  if (discount < 0 || discount > 100) {
    return "Debes ingresar un descuento valido"
  } else {
    finalPrice = price - (price * discount / 100)
  }

  return finalPrice;
}

const finalPrice = calculateDiscount(200, 60)
console.log(finalPrice);

// -----------------------------

const $input = document.querySelector("#username");
const $button = document.querySelector("#submit");

$button.addEventListener("click", () => {

  console.log($input.value.length, "<- cant de caracteres en el valor del input")

  if ($input.value.length > 0) {
    alert("Hola " + $input.value);
  } else {
    alert("Por favor escribe un nombre");
  }
});

// ----------------------------------------------------------

let users = [
  { name: "Ana", age: 14 },
  { name: "Luis", age: 13 },
  { name: "Marta", age: 30 },
  { name: "Alanis", age: 24 }
];

let adults = users.filter(user => user.age >= 18);

console.log(adults[1])

// callback -> funcion que se ejecutará en cada elemento
adults.forEach((adult) => {
  console.log(adult["name"])
})

