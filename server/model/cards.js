let db = require("./db.js").knex;

module.exports.retrieveEditions = () => {
  console.log(`Retrieving edition list.`);
  return db.select('name', 'code').from('Editions')
    .then(editionList => {
      return editionList;
    })
    .catch((err) => {
      console.log(`Error occurred: `, err);
      return err;
    });
}

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
// module.exports.retrieveEditions();
// module.exports.retrieveEditionCards({
//   type: 'Artifact',
//   editionId: 'RTR'
// });