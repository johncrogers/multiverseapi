let db = require("./../db.js");
let multiverse = require("./../../../data/local/multiverse.js").data;
let editions = Object.keys(multiverse);
let blocks = [];
for (let editionIndex = 0; editionIndex < editions.length; editionIndex++) {
  // if (multiverse[editions[editionIndex]].type != "promo") {
  let edition = multiverse[editions[editionIndex]];
  delete edition.cards;
  delete edition.border;
  delete edition.booster;
  delete edition.mkm_name;
  delete edition.mkm_id;
  delete edition.code;
  delete edition.magicCardsInfoCode;
  delete edition.magicRaritiesCodes;
  delete edition.translations;
  delete edition.gathererCode;
  delete edition.onlineOnly;
  delete edition.alternativeNames;
  delete edition.oldCode;
  edition.code = editions[editionIndex];
  if (blocks.indexOf(multiverse[editions[editionIndex]].block) == -1) {
    blocks.push(multiverse[editions[editionIndex]].block);
  }

  // console.log(edition);
  // }
  db.knex("Editions")
    .insert(edition)
    .then(() => {
      console.log(`Added ${editions[editionIndex]} edition data.`)
    })
    .catch((err) => {
      console.log(err);
    })
}
// console.log(JSON.stringify(blocks));