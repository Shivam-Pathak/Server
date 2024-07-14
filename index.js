const express = require('express');
const mongoose = require("./config/db");
const routes = require("./routes");
const cors = require("cors");

const app = express();

// * Database connection
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("db connected!");
});

app.use(cors());
app.use(express.json());

async function main() {
}

main();

// * Api routes
app.use("/api", routes);

app.get("/", (req, res) => {
  console.log("hello");
  res.send("hello");
});

app.use("*", (req, res) => {
  res.send("Route not found");
});

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});