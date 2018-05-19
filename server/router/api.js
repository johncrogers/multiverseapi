const router = require("express").Router();
const Cards = require('./../model/cards.js');
const Collections = require('./../model/collections.js');
const Users = require("./../model/users");
const bodyParser = require("body-parser");
router.use(bodyParser.json());

//==========================================================[ IDS ]==========================================================================

router.get("/editions", (req, res) => {
  console.log(`GET /editions`);
  new Promise((resolve, reject) => {
      resolve(Cards.retrieveEditions());
    })
    .then((DATA) => {
      res.status(200).json(DATA).end();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});
router.get("/users/:userId/collections", (req, res) => {
  console.log(`GET /users/collections`);
  let filters = {
    userId: req.params.userId
  }
  Collections.retrieveUserCollectionIds(filters)
    .then((collectionIds) => {
      res.status(200).json(collectionIds).end();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end()
    });
});

//==========================================================[ DETAILS ]==========================================================================

router.get("/editions/:editionId", (req, res) => {
  console.log(`GET /editions/${req.params.editionId}`);
  let filters = {
    code: req.params.editionId
  };
  let edition = {
    details: {},
    cards: []
  }
  Cards.retrieveEdition(filters)
    .then((details) => {
      edition.details = details[0];
      return Cards.retrieveEditionCards({
        editionId: filters.code
      });
    })
    .then((cards) => {
      edition.cards = cards;
      res.status(200).json(edition).end();
    }).catch((err) => {
      console.log(err);
      res.status(500).end();
    })
});

router.get("/users/:userId/collections/:collectionId", (req, res) => {
  console.log(`GET /users/${req.params.userId}/collections/${req.params.collectionId}`);
  let filters = {
    collectionId: req.params.collectionId
  }
  let collection = {
    details: {},
    cards: []
  };
  Collections.retrieveCollection({
      id: filters.collectionId
    })
    .then((details) => {
      collection.details = details[0];
      return Collections.retrieveCollectionCards({
        collection_id: filters.collectionId
      })
    })
    .then((cards) => {
      collection.cards = cards.rows;
      res.status(200).json(collection).end();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end()
    });
});

//==========================================================[ COLLECTION HANDLING ]==========================================================================

router.post('/collections', (req, res) => {
  let details = req.body;
  console.log(details);
  let cards = details.cards;
  delete details.cards;

  new Promise((resolve, reject) => {
      resolve(Collections.saveCollection(details, cards));
    })
    .then((data) => {
      console.log(` -> Collection save complete.`);
      res.status(201).end()
    })
    .catch((err) => {
      console.log(`Error occurred: `, err);
      res.status(500).end()
    });
});

router.delete('/collections/:id', (req, res) => {
  new Promise((resolve, reject) => {
      resolve(Collections.deleteCollection(req.params.id));
    })
    .then(() => {
      return Collections.deleteCollectionCards(req.params.id)
    })
    .then(() => {
      console.log(` -> Delete collection ${req.params.id}`);
      res.status(200).end()
    })
    .catch((err) => {
      console.log(`Error occurred: `, err);
      res.status(500).end()
    });
})

router.delete('/collections/:collectionId/cards/:cardId', (req, res) => {
  new Promise((resolve, reject) => {
      resolve(Collections.deleteCollectionCard(req.params.cardId));
    })
    .then(() => {
      console.log(` -> deleted collection csar by id ${req.params.cardId}`);
      res.status(200).end()
    })
    .catch((err) => {
      console.log(`Error occurred: `, err);
      res.status(500).end()
    });
})
//==========================================================[ USER ]==========================================================================
router.post('/users', (req, res) => {
  new Promise((resolve, reject) => {
      console.log(req.body);
      resolve(Users.authenticateUser(req.body));
    })
    .then((DATA) => {
      console.log(` -> user log in`);
      // if (DATA.length) {
      res.json(DATA);
      // }
      // res.send("FAIL").end();
    })
    .catch((err) => {
      console.log(`Error occurred: `, err);
      res.status(500).end()
    });
})

module.exports.router = router;