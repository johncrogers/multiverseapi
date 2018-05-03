const multiverse = require("./../../data/local/multiverse.js").data;

module.exports.retrieveEditionList = () => {
  let editions = {};
  let editionIdList = Object.keys(multiverse);
  editionIdList.forEach(editionId => {
    // console.log(multiverse[editionId].name);
    editions[multiverse[editionId].name] = editionId;
  });
  return editions;
};

module.exports.retrieveEditionDetail = editionId => {
  let edition = multiverse[editionId];
  // console.log(Object.keys(edition));
  delete edition.cards;
  return edition;
};

module.exports.retrieveEditionCardData = editionId => {
  let cardData = multiverse[editionId].cards;
  // console.log(Object.keys(cardData[0]));
  return cardData;
};
