const $user = document.querySelector("#user-active")

// $user.innerHTML = "<span>G</span>abriel <strong strong strong class='title-name' id = 'pepe' > Alberini</strong > <button>Cerrar sesión</button>"

const lastname = "Barroumeres"

$user.innerHTML = `<span>G</span>abriel 
  <strong strong class='title-name' id = 'pepe' >${lastname}</strong > 
  <button>Cerrar sesión</button>
`

// console.log($user.textContent)