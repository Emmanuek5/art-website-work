const websocket = require("ws");

const Mail = require("../app/Mail/class");
const wss = new websocket.Server({port: 4000})

wss.on("connection",ws =>{
    console.log("New Connected Client");
ws.on("message", async e =>{
    const s = e.toString()
  const data = JSON.parse(s)
  if (data.type == "contact-form") {
    const {name,email,message} = data
    const options = {
        name : name,
        mail : email,
        message: message
    }
   const Mais =new Mail(options)
 const result = await Mais.sendMail()

 if (result) {
    console.log("hELLO");
   ws.send("Hello")
 }
}
})
    ws.on('close',()=>{
        console.log("Disconnected");
    })
    
})

module.exports = wss