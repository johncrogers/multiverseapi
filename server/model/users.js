let db = require("./db.js").knex;

module.exports.retrieveEdition = (filters) => {
  console.log(`Retrieving edition ${filters.code} details.`);
  return db.select().from('Editions').where(filters)
    .then((DATA) => {
      return DATA;
    })
    .catch((err) => {
      console.log(`Error occurred: `, err);
      return err;
    });
}

module.exports.retrieveEditionCards = (filters) => {
  console.log(`Retrieving edition ${filters.editionId} cards.`);
  return db.select('*').from('cards').where(filters)
    .then((DATA) => {
      return DATA;
    })
    .catch((err) => {
      console.log(`Error occurred: `, err);
      return err;
    });
}