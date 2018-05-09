// IMPORT
const express = require("express");
const path = require("path");
const api = require(path.join(`${__dirname}/router/api.js`)).router;
// const cors = require("cors");
// const bodyParser = require("body-parser");

// SETUP
// server.use(bodyParser.json());
// server.use(cors());
const server = express();
const port = 8080;
server.use(express.static(__dirname + "/../client/dist"));
server.get("/", (request, response) => {
  response.sendFile(path.join(`${__dirname}/../client/index.html`));
});

// ENDPOINTS
server.get("/docs", (request, response) => {
  response.sendFile(
    path.join(`${__dirname}/../client/documentation/docs.html`)
  );
});
server.use("/api", api);

// RUN:
server.listen(port, function () {
  console.log(`listening on port ${port}!`);
});