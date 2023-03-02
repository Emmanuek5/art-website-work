const wss = new WebSocket("ws://localhost:4000");
wss.addEventListener("open", (e) => {
  console.log(e);
});


