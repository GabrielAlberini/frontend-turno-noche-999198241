const inputMessage = document.querySelector(".text")
const sendButton = document.querySelector(".btn-enviar")
const chatMessages = document.querySelector(".chat-messages")

// invocación de función
sendButton.addEventListener("click", sendMessage)

// declaración de función
// palabra reservada -> function ✅
// nombre de la función -> siempre debe ser un verbo -> sendMessage ✅
// parentesis -> parametros -> herramientras internas para la funcion
// llaves -> escope -> zona privada de la función

function sendMessage() {
  const message = inputMessage.value

  const divMessage = document.createElement("div")
  divMessage.classList.add("message-sent")

  const text = document.createElement("p")
  text.textContent = message

  divMessage.appendChild(text)

  // creando el timestamp
  const timestamp = document.createElement("p")
  timestamp.classList.add("timestamp")
  timestamp.textContent = new Date().toLocaleTimeString()

  divMessage.appendChild(timestamp)

  chatMessages.appendChild(divMessage)

  inputMessage.value = ""

  // asíncrono  
  setTimeout(function () {
    const divMessage = document.createElement("div")
    divMessage.classList.add("message-received")

    const response = document.createElement("p")
    response.textContent = `Recibido ${message} ✅`

    divMessage.appendChild(response)

    chatMessages.appendChild(divMessage)
  }, 5000)
}





