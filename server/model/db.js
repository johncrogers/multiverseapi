var knex = require("knex")({
  client: "pg",
  version: "7.2",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_DATABASE
  }
});