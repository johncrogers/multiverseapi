// This is the api server file.

// MODULES:
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const router = require("./router/routes.js").router;

// INCLUDE:

// INSTANTIATE:
const server = express();
const port = process.env.PORT || 8080;

// ROUTING:
server.use(bodyParser.json());
server.use(cors());
server.use(express.static(__dirname + "/../client/dist"));
server.get("/", (request, response) => {
  response.sendFile(path.join(`${__dirname}/../client/dist/index.html`));
});
server.use("/api", router);

// INITIALIZE:
server.listen(port, function() {
  console.log(`listening on port ${port}!`);
});
