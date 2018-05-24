let db = require("./../db.js");
let multiverse = require("./../../../data/local/multiverse.js").data;
let editions = Object.keys(multiverse);

for (let editionIndex = 0; editionIndex < editions.length; editionIndex++) {
  let collectionToInsert = [];
  multiverse[editions[editionIndex]].cards.forEach((card) => {
    collectionToInsert.push({
      "multiverseId": card["multiverseid"],
      "name": card["name"],
      "manaCost": card["manaCost"],
      "type": card["type"],
      "editionId": editions[editionIndex],
      "rarity": card["rarity"],
      "colors": card["colors"],
      "text": card["text"],
      "flavor": card["flavor"],
      "power": card["power"],
      "toughness": card["toughness"],
      "loyalty": card["loyalty"],
      "legality": card["legalities"],
    });
  });
  db.knex("Cards").insert(collectionToInsert)
    .then(() => {
      console.log(`Added ${editions[editionIndex]} card data.`);
    })
    .catch((err) => {
      console.log(err)
    })
}