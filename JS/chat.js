
const input = document.getElementById("messageInput");
const chat = document.getElementById("chat");

// Agregar texto al input cuando se presiona una tecla del teclado virtual
document.querySelectorAll(".key").forEach(key => {
    key.addEventListener("click", () => {
        if (key.id === "deleteKey") {
            input.value = input.value.slice(0, -1); // Borra el último carácter
        } else if (key.id === "sendKey") {
            sendMessage(); // Call sendMessage when the sendKey is clicked
        } else {
            input.value += key.textContent;
        }
    });
});


  // Enviar mensaje cuando se hace clic en "Enviar"
function sendMessage() {
    const messageText = input.value.trim();
    if (messageText === "") return;

    const message = document.createElement("div");
    message.classList.add("message", "user");
    message.textContent = messageText;
    chat.appendChild(message);

    input.value = "";
    chat.scrollTop = chat.scrollHeight;


    // Simulación de respuesta automática
    setTimeout(() => {
        receiveMessage("¡Hola! Esto es una respuesta automática.");
    }, 1000);
}

function receiveMessage(text) {
    const message = document.createElement("div");
    message.classList.add("message", "other");
    message.textContent = text;
    chat.appendChild(message);
    chat.scrollTop = chat.scrollHeight;
}


// Detectar teclas físicas del teclado
document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (key === "Backspace") {
        input.value = input.value.slice(0, -1);
    } else if (key === "Enter") {
        sendMessage();
    } else if (key.length === 1 || key === " ") {
        input.value += key;
    }
});