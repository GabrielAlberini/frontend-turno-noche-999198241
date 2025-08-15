const $contactsList = document.querySelector(".contact-list")

const contacts = [
  { name: "Vincent Porter", status: "online", lastConnection: "7 mins ago" },
  { name: "Aiden Chavez", status: "online", lastConnection: "now" },
  { name: "Monica Ward", status: "online", lastConnection: "now" },
  { name: "Micaela Colman", status: "online", lastConnection: "1 min ago" },
  { name: "Edu Bayon", status: "online", lastConnection: "online" }
];


contacts.forEach(function (contact) {
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