let db = require("./db.js").knex;

module.exports.authenticateUser = (filters) => {
  console.log(`Retrieving user ${filters.username} details.`);
  return db.select().from('Users').where(filters)
    .then((DATA) => {
      // console.log(DATA);
      return DATA;
    })
    .catch((err) => {
      console.log(`Error occurred: `, err);
      return err;
    });
}
module.exports.createUser = (userDetails) => {
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