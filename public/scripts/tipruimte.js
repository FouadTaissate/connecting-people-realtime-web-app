let socket = io();
let messages = document.querySelector("main section ul");
let inputName = document.querySelector("textarea.name");
let inputTip = document.querySelector("textarea.tip")

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputName.value && inputTip.value) {
    socket.emit("message", inputName.value + ": " + inputTip.value);
    inputName.value = "";
    inputTip.value = "";
  }
});

socket.on("message", (message) => {
  addMessage(message);
});

socket.on("whatever", (message) => {
  addMessage(message);
});

socket.on("history", (history) => {
  history.forEach((message) => {
    addMessage(message);
  });
});

function addMessage(message) {
  messages.appendChild(
    Object.assign(document.createElement("li"), { textContent: message })
  );
  messages.scrollTop = messages.scrollHeight;
}
