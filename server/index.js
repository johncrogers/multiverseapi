// IMPORT
const express = require("express");
const path = require("path");
const api = require(path.join(`${__dirname}/router/api.js`)).router;
const cors = require("cors");
const bodyParser = require("body-parser");
const users = require("./model/users.js");
let errors = {
  userExists: "This user already exists."
}
// SETUP
const server = express();
const port = 8080;
server.use(cors());
server.use(bodyParser.json());
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
server.post("/users", (request, response) => {
  console.log(request.body);
  // new Promise((resolve, reject) => {
  //     resolve(users.createUser(request.body));
  //   })
  // .then((DATA) => {
  //   console.log(` -> User created`);
  //   response.end()
  // })
  // .catch((err) => {
  //   console.log(`Error occurred: `, err);
  //   response.status(500).end()
  // });
  new Promise((resolve, reject) => {
      resolve(users.authenticateUser(request.body));
    })
    .then((DATA) => {
      console.log(DATA.length);
      console.log(` -> User created`);
      if (DATA.length) {
        // logv
        response.send(errors.userExists).end()
      }
      users.createUser(request.body)
        .then((DATA) => {
          console.log(` -> User created`);
          response.end()
        })
        .catch((err) => {
          console.log(`Error occurred: `, err);
          response.status(500).end()
        });
    })
    .catch((err) => {
      console.log(`Error occurred: `, err);
      response.status(500).end()
    });
})

// RUN:
server.listen(port, function () {
  console.log(`listening on port ${port}!`);
});