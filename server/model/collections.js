const db = require('./db.js').knex;
// const sample = require('./populate/sample.js').data

module.exports.saveCollectionDetails = (collection) => {
  console.log(`Saving new collection ${JSON.stringify(collection)}...`);
  return db('Collections').insert(collection)
    .then(() => {
      console.log(` -> Saved new collection.`);
    })
    .catch((err) => {
      console.log(`Error occurred: `, err);
    });
}
module.exports.saveCollectionCards = (cardData) => {
  console.log(`Saving collection cards...`);
  return db('cards_collections').insert(cardData)
    .then(() => {
      console.log(` -> Saved collection cards.`);
    })
    .catch((err) => {
      console.log(`Error occurred: `, err);
    });
}

module.exports.retrieveUserCollectionIds = (filters) => {
  console.log(`Retrieving user ${filters.userId} collection list.`);
  return db('Collections').select('name', 'id').where(filters)
    .then((DATA) => {
      return DATA;
    })
    .catch((err) => {
      console.log(`Error occurred: `, err);
    });
}

module.exports.retrieveCollection = (filters) => {
  console.log(`Retrieving collection id: ${filters.id}.`);
  return db('Collections').select().where(filters)
    .then((DATA) => {
      return DATA
    })
    .catch((err) => {
      console.log(`Error occurred: `, err);
      return err;
    });
}

module.exports.retrieveCollectionCards = (filters) => {
  console.log(`Retrieving user ${filters.userId} collection ${filters.collection_id} cards.`);
  // return db.table('Cards').innerJoin('cards_collections', 'Cards.multiverseId', '=', 'cards_collections.multiverseId')
  // return db.raw(`SELECT * FROM Cards`)
  return db.raw(`SELECT * FROM Cards INNER JOIN cards_collections ON Cards.multiverseid = cards_collections.multiverseid WHERE cards_collections.collection_id = '${filters.collection_id}'`)
    .then((DATA) => {
      return DATA;
    })
    .catch((err) => {
      console.log(`Error occurred: `, err);
      return err;
    });
}
// module.exports.saveCollectionDetails({
//   name: 'Test Collection',
//   description: 'A collection to test.',
//   type: 'test'
// });
// module.exports.saveCollectionCards(sample);
// module.exports.retrieveUserCollectionIds(1);
// module.exports.retrieveCollection(1);