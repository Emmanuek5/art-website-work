process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at: Promise", promise, "reason:", reason);
});

process.on("uncaughtException", function (error) {
  console.error("An uncaught exception occurred:", error);
});

const Server = require("./src/server/server");
const mongoose = require("mongoose");
const App = require("./src/app/class");
require("dotenv").config();

const start = new App().Start(Server.server, Server.websocket);
console.log(process.env.DATABASE_URL);
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", (d) => console.log("Connected To Database"));
