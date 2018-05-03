var express = require("express");
var router = express.Router();

router.get("", (req, res) => {});

// GET /api/editions - To retrieve a list of MTG editions. [[editionName, editionId],...]
router.get("/editions", (req, res) => {
  // add auth to route.
  // promise
  // resolve
  // multiverse.retrieveEditionList()
  // then
  // set status / json
  // catch
  // 500.send
  res.send("Success");
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
// // GET /api/editions/:editionId - Returns detailed data about a specific edition.
// server.get("/api/editions/:editionId", (req, res) => {
//   // promise
//   // resolve
//   // multiverse.retrieveEditionDetail()
//   // then
//   // set status / json
//   // catch
//   // 500.send
// });
// // GET /api/editions/:editionId/cards - Returns a list of cards for a specific edition. [{card: info},...]
// server.get("/api/edition/:editionId/cards", (req, res) => {
//   // promise
//   // resolve
//   // multiverse.retrieveEditionCards()
//   // then
//   // set status / json
//   // catch
//   // 500.send
// });
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
