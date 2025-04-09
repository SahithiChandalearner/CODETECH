const socket = new WebSocket("ws://localhost:3000");

const editor = document.getElementById("editor");

socket.addEventListener("message", (event) => {
  editor.value = event.data;
});

editor.addEventListener("input", () => {
  socket.send(editor.value);
});
