const db = require('./db.js').knex;
// const sample = require('./populate/sample.js').data

module.exports.saveCollection = (details, cards) => {
  console.log(`Saving new collection ${JSON.stringify(details)}...`);
  return db('Collections').insert(details)
    .then(() => {
      console.log(` -> Collection details saved.`);
      return db('Collections').select('id').where('name', details.name).then((idToInset) => {
        let collectionIdToInsert = idToInset[0].id;
        let cardsToInsert = [];
        cards.map((card) => {
          cardsToInsert.push({
            multiverseid: card.multiverseId,
            collection_id: collectionIdToInsert
          })
        })
        return db('cards_collections').insert(cardsToInsert).then(() => {
          console.log(` -> Collection cards saved.`);
        }).catch((err) => {
          console.log(err);
        })
      })
    })
    .catch((err) => {
      console.log(`Error occurred: `, err);
    });
}


module.exports.retrieveUserCollectionIds = (filters) => {
  console.log("input at model: ", filters);
  // console.log(`Retrieving user ${filters.userId} collection list.`);
  return db('Collections').select('name', 'id').where(filters)
    .then((DATA) => {
      return DATA;
    })
    .catch((err) => {
      console.log(`Error occurred: `, err);
    });
}

module.exports.retrieveCollection = (filters) => {
  console.log(JSON.stringify(filters));
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
module.exports.deleteCollection = (id) => {
  db('Collections').where('id', '=', id).del()
    .then(() => {
      console.log(`collection ${id} deleted.`);
    }).then(() => {
      db('cards_collections').where('collection_id', '=', id).del()
        .then(() => {
          console.log(`cards for collection ${id} deleted.`);
        }).catch((err) => {
          console.log(err);
        })
    })
    .catch((err) => {
      console.log(err);
    })
}
module.exports.deleteCollectionCards = (id) => {
  db('cards_collections').where('collection_id', '=', id).del()
    .then(() => {
      console.log(`cards removed`);
    }).catch((err) => {
      return err;
    })
}
module.exports.deleteCollectionCard = (id) => {
  db('cards_collections').where('id', '=', id).del()
    .then(() => {
      console.log(`card removed`);
    }).catch((err) => {
      return err;
    })
}
// module.exports.saveCollectionDetails({
//   name: 'Test Collection',
//   description: 'A collection to test.',
//   type: 'test'
// });
// module.exports.saveCollectionCards(sample);
// module.exports.retrieveUserCollectionIds(1);
// module.exports.retrieveCollection(1);

// module.exports.saveCollectionCards = (cardData, userId) => {
//   console.log(`Saving collection cards...`);
//   // get collectionId
//   // prepare card data
//   // insert
//   return db('cards_collections').insert(cardData)
//     .then((data) => {
//       console.log(` -> Saved collection cards.`);
//     })
//     .catch((err) => {
//       console.log(`Error occurred: `, err);
//     });
// }