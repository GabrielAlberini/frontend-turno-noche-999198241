const $contactsList = document.querySelector(".contact-list")
const $searchInput = document.querySelector("#searchInput")

// base de datos de contactos
const contacts = [
  { name: "Vincent Porter", status: "offline", lastConnection: "7 mins ago" },
  { name: "Aiden Chavez", status: "online", lastConnection: "now" },
  { name: "Monica Ward", status: "online", lastConnection: "now" },
  { name: "Micaela Colman", status: "offline", lastConnection: "1 min ago" },
  { name: "Edu Bayon", status: "online", lastConnection: "now" }
];

function renderContacts(listOfContacts) {
  $contactsList.innerHTML = ""

  listOfContacts.forEach(function (contact) {
    let className = ""

    if (contact.status === "online") {
      className = "status-online"
    } else {
      className = "status-offline"
    }



    $contactsList.innerHTML += `
  <li class="contact">
    <img src="assets/avatar.jpeg" alt="imagen de perfil" />
   <div>
      <h4>${contact.name}</h4>
      <p class="${className}">${contact.lastConnection}</p>
   </div>
  </li>
  `
  })
}

renderContacts(contacts)

$searchInput.addEventListener("input", searchContacts)

function searchContacts() {
  const inputValue = $searchInput.value.toLowerCase()

  const filteredContacts = []

  contacts.forEach(function (contact) {
    const contactNameToLowerCase = contact.name.toLowerCase()
    if (contactNameToLowerCase.includes(inputValue)) {
      filteredContacts.push(contact)
    }
  })

  renderContacts(filteredContacts)
}