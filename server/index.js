// This is the api server file.

// MODULES:
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

// INCLUDE:

// INSTANTIATE:
const server = express();
var port = process.env.PORT || 3000;

// ROUTING:
server.use(bodyParser.json());
server.use(cors());
server.use(express.static(__dirname + "../dist"));
server.get("/", (request, response) => {
  response.sendFile(path.join(`${__dirname}/../client/index.html`));
});
// ADD: Routes:
server.use("/api", router);

/*
Fun Features:
 - Add routes for type.
    - Type
    - Plane
    - Color
    - Tribe
    - Age
    - Year
*/

// INITIALIZE:
server.listen(port, function() {
  console.log("listening on port 3000!");
});

// multiverse mongo
// cards in sqlite
