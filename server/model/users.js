// let db = require("./db.js").knex;

module.exports.authenticateUser = (filters) => {
  let db = require("./db.js").knex;
  console.log(`Retrieving user ${filters.username} details.`);
  return db.select().from('Users').where(filters)
    .then((DATA) => {
      console.log("DATA in model: ", DATA);
      return DATA;
    })
    .catch((err) => {
      console.log(`Model Error occurred: `, err);
      return err;
    });
}
module.exports.createUser = (userDetails) => {
  let db = require("./db.js").knex;
  console.log(userDetails);
  console.log(`Adding user.`);
  return db("Users").insert(userDetails).then(() => {
    console.log(` => User added.`);
  }).catch((err) => {
    console.log(err);
  })
}

// module.exports.createUser({
//   username: "john",
//   password: "john"
// })
// module.exports.authenticateUser({
//   username: "john",
//   password: "john"
// })