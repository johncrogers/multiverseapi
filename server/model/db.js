module.exports.knex = require("knex")({
  client: "pg",
  version: "7.2",
  connection: {
    host: process.env.DB_HOST || "multiverseapidata.cbtesjedgl9t.us-east-2.rds.amazonaws.com",
    user: process.env.DB_USER || "mrrogers",
    password: process.env.DB_PW || "56234623asdn",
    database: process.env.DB_DATABASE || "multiverse"
  }
});