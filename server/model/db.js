module.exports.knex = require("knex")({
  client: "pg",
  version: "7.2",
  connection: {
    host: "multiverseapidata.cbtesjedgl9t.us-east-2.rds.amazonaws.com",
    user: "mrrogers",
    password: "56234623asdn",
    database: "multiverse"
  }
});