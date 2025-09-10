// asincronia
// pedidos que suceden en paralelo


// código sincrónico
// console.log("Paso 1")
// console.log("Paso 2")
// console.log("Paso 3")

// código asincrónico
// console.log("---------------------")
// console.log("Paso 4")
// setTimeout(() => {
//   console.log("Paso 5")
// }, 5000);
// console.log("Paso 6")

// asynchronous

const lista = document.getElementById("lista-de-personajes")

const fetchingData = async () => {
  const respuesta = await fetch("https://rickandmortyapi.com/api/character")

  const informacion = await respuesta.json()
  console.log(informacion.results)

  informacion.results.forEach((personaje) => {
    lista.innerHTML +=
      `<li>
        <img width="80" src="${personaje.image}">
        <p>${personaje.name}</p>
      </li>`
  })
}

fetchingData()