module.exports.knex = require("knex")({
  client: "pg",
  version: "9.6",
  connection: {
    host: process.env.awshost,
    user: process.env.awsuser,
    password: process.env.awspassword,
    database: process.env.awsdatabase
  }
});