const router = require("express").Router();
const jsonhelpers = require("./../model/jsonhelpers.js");

// GET /api/editions - To retrieve a list of MTG editions. [[editionName, editionId],...]
router.get("/editions", (req, res) => {
  // JSON
  let editions = jsonhelpers.retrieveEditionList();
  res.json(editions);

  // add auth to route.
  // promise
  // resolve
  // multiverse.retrieveEditionList()
  // then
  // set status / json
  // catch
  // 500.send
});

// // POST /api/editions - To add from new version of JSON library.
// server.post("/api/editions", (req, res) => {
//   // promise
//   // resolve
//   // multiverse.addEdition()
//   // then
//   // set status / json
//   // catch
//   // 500.send
// });

// GET /api/editions/:editionId - Returns detailed data about a specific edition.
router.get("/editions/:editionId", (req, res) => {
  // JSON
  let editionId = req.params.editionId;
  let edition = jsonhelpers.retrieveEditionDetail(editionId);
  res.json(edition);

  // promise
  // resolve
  // multiverse.retrieveEditionDetail()
  // then
  // set status / json
  // catch
  // 500.send
});

// // GET /api/editions/:editionId/cards - Returns a list of cards for a specific edition. [{card: info},...]
router.get("/editions/:editionId/cards", (req, res) => {
  // JSON
  let editionId = req.params.editionId;
  let editionCardData = jsonhelpers.retrieveEditionCardData(editionId);
  res.json(editionCardData);

  // promise
  // resolve
  // multiverse.retrieveEdtitionCardData()
  // then
  // set status / json
  // catch
  // 500.send
});

// // POST /api/cards - To add cards.
// server.post("/api/cards", (req, res) => {
//   // promise
//   // resolve
//   // cards.addCards()
//   // then
//   // set status / json
//   // catch
//   // 500.send
// });

// // GET /api/cards/:multiverseId - Returns specific card by multiverse id.
// server.get("/api/cards/:multiverseId", (req, res) => {
//   // promise
//   // resolve
//   // cards.retrieveCardDetail()
//   // then
//   // set status / json
//   // catch
//   // 500.send
// });

module.exports.router = router;
