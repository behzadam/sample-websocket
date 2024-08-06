const trade = document.getElementById("trade");

const socket = new WebSocket("ws://localhost:8080");

socket.addEventListener("message", function (event) {
  trade.innerHTML = event.data;
});
