const router = require("express").Router();
const Cards = require('./../model/cards.js');
const Collections = require('./../model/collections.js');
const bodyParser = require("body-parser");
router.use(bodyParser.json());

// GET /api/editions - To retrieve a list of MTG editions. [[editionName, editionId],...]
router.get("/editions", (req, res) => {
  console.log(`GET /editions`);
  new Promise((resolve, reject) => {
      resolve(Cards.retrieveEditions());
    })
    .then((DATA) => {
      console.log(` -> success`);
      res.status(200).json(DATA).end();
    })
    .catch((err) => {
      console.log(`Error occurred: `, err);
      res.status(500).end();
    });
});

// GET /api/editions/:editionId - Returns detailed data about a specific edition.
router.get("/editions/:editionId", (req, res) => {
  console.log(`GET /editions/${req.params.editionId}`);
  let filters = {
    code: req.params.editionId
  };
  new Promise((resolve, reject) => {
      resolve(Cards.retrieveEdition(filters));
    })
    .then((DATA) => {
      console.log(` -> success`);
      res.status(200).json(DATA[0]).end();
    })
    .catch((err) => {
      console.log(`Error occurred: `, err);
      res.status(500).end()
    });
});

// GET /api/editions/:editionId/cards - Returns a list of cards for a specific edition. [{card: info},...]
router.get("/editions/:editionId/cards", (req, res) => {
  console.log(`GET /editions/${req.params.editionId}/cards`);
  let filters = {
    editionId: req.params.editionId
  };
  new Promise((resolve, reject) => {
      resolve(Cards.retrieveEditionCards(filters));
    })
    .then((DATA) => {
      console.log(` -> success`);
      res.status(200).json(DATA).end();
    })
    .catch((err) => {
      console.log(`Error occurred: `, err);
      res.status(500).end()
    });
});

// // GET 
// router.get("/users", (req, res) => {
//   // 
// });

// GET 
router.get("/users/:userId/collections", (req, res) => {
  console.log(`GET /users/collections`);
  let filters = {
    userId: req.params.userId
  }
  new Promise((resolve, reject) => {
      resolve(Collections.retrieveUserCollectionIds(filters));
    })
    .then((DATA) => {
      console.log(` -> success`);
      res.status(200).json(DATA).end();
    })
    .catch((err) => {
      console.log(`Error occurred: `, err);
      res.status(500).end()
    });
});

// GET 
router.get("/users/:userId/collections/:collectionId", (req, res) => {
  console.log(`GET /users/${req.params.userId}/collections/${req.params.collectionId}`);
  let filters = {
    // userId: req.params.userId,
    id: req.params.collectionId
  }
  new Promise((resolve, reject) => {
      resolve(Collections.retrieveCollection(filters));
    })
    .then((DATA) => {
      console.log(` -> success`);
      res.status(200).json(DATA[0]).end();
    })
    .catch((err) => {
      console.log(`Error occurred: `, err);
      res.status(500).end()
    });
});

router.get("/users/:userId/collections/:collectionId/cards", (req, res) => {
  console.log(`GET /users/collections/${req.params.collectionId}/cards`);
  let filters = {
    userId: req.params.userId,
    collection_id: req.params.collectionId
  }
  new Promise((resolve, reject) => {
      resolve(Collections.retrieveCollectionCards(filters));
    })
    .then((DATA) => {
      console.log(` -> success`);
      res.status(200).json(DATA.rows).end();
    })
    .catch((err) => {
      console.log(`Error occurred: `, err);
      res.status(500).end()
    });
});

// POST 

// router.post('/collections', (req, res) => {
//   let body = req.body;
//   let cards = req.body.cards;
//   delete body.cards;
//   new Promise((resolve, reject) => {
//       resolve(Collections.saveCollectionDetails(body));
//     })
//     .then(() => {
//       console.log(` -> Collection details added.`);
//       new Promise((resolve, reject) => {
//           resolve(Collections.saveCollectionCards(cards));
//         })
//         .then(() => {
//           console.log(` -> Collection cards added.`);
//           res.status(201).end()
//         })
//         .catch((err) => {
//           console.log(`Error occurred: `, err);
//           res.status(500).end()
//         });
//     })
//     .catch((err) => {
//       console.log(`Error occurred: `, err);
//       res.status(500).end()
//     });
// });


module.exports.router = router;