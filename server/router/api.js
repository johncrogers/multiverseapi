const router = require("express").Router();

// GET /api/editions - To retrieve a list of MTG editions. [[editionName, editionId],...]
router.get("/editions", (req, res) => {
  // select name, code from Editions
  // then
  // res.json([["editionName","editionCode"]])
  // catch
  // res.status(500).end()
});

// GET /api/editions/:editionId - Returns detailed data about a specific edition.
router.get("/editions/:editionId", (req, res) => {
  // select * from Editions
  // where Editions.code = code
  // then
  // res.json({})
  // catch
  // res.status(500).end()
});

// GET /api/editions/:editionId/cards - Returns a list of cards for a specific edition. [{card: info},...]
router.get("/editions/:editionId/cards", (req, res) => {
  // select * from Cards
  // where multiverseId = multiverseId
  // then
  // res.json([{}])
  // catch
  // res.status(500).end()
});

// GET 
router.get("/collections", (req, res) => {
  // 
});

// GET 
router.get("/collections/:collectionId", (req, res) => {

});

// GET 
router.get("/collections/:collectionId/cards", (req, res) => {

});

// POST 
router.post("/collections", (req, res) => {

});

module.exports.router = router;