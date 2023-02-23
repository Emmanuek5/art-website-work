const websocket = require("ws")
const wss = new websocket.Server({port: 4000})

wss.on("connection",ws =>{
    console.log("New Connected Client");
ws.on("message", data =>{
      ws.send(data.toString().toUpperCase());
    console.log(`Client has sent ${data}`);

  
})
    ws.on('close',()=>{
        console.log("Disconnected");
    })
    
})

module.exports = wss