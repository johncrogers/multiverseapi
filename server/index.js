// This is the api server file.

// MODULES:
const express = require("express");
// const bodyParser = require("body-parser");
const path = require("path");
// const cors = require("cors");
const api = require(path.join(`${__dirname}/router/api.js`)).router;

// INCLUDE:

// INSTANTIATE:
const server = express();
const port = 8080;

// ROUTING:
// server.use(bodyParser.json());
// server.use(cors());
server.use(express.static(__dirname + "/../client/dist"));
server.get("/", (request, response) => {
  response.sendFile(path.join(`${__dirname}/../client/index.html`));
});
server.get("/docs", (request, response) => {
  response.sendFile(
    path.join(`${__dirname}/../client/documentation/docs.html`)
  );
});
server.use("/api", api);

// INITIALIZE:
server.listen(port, function() {
  console.log(`listening on port ${port}!`);
});
