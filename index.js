const Server = require("./src/server/server")
const mongoose = require("mongoose")
const App = require("./src/app/class")

const start = new App().Start(Server.server,Server.websocket )
