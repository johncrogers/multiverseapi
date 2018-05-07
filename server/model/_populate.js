let db = require("./db.js");
let multiverse = require("./../../data/local/multiverse.js").data;
let editions = Object.keys(multiverse);

for (let editionIndex = 0; editionIndex < editions.length; editionIndex++) {
  let collectionToInsert = [];
  // editions[editionIndex]
  multiverse[editions[editionIndex]].cards.forEach((card) => {
    collectionToInsert.push({
      "multiverseId": card["multiverseid"],
      "name": card["name"],
      "manaCost": card["manaCost"],
      "type": card["type"],
      "editionId": editions[editionIndex],
      "rarity": card["rarity"],
      "colors": JSON.stringify(card["colors"]),
      "text": card["text"],
      "flavor": card["flavor"],
      "power": card["power"],
      "toughness": card["toughness"],
      "loyalty": card["loyalty"],
      "legality": JSON.stringify(card["legalities"]),
    });
  });
  db.knex("Cards").insert(collectionToInsert)
    .then(() => {
      // console.log(`Added ${editions[editionIndex]}`)
      console.log(`Added ${editions[editionIndex]}`);
    })
    .catch((err) => {
      console.log(err)
      // console.log(` => Failed to add ${editions[editionIndex]}`)
    })
}
// console.log(totalCount);
// for (let edition = 0; edition < editions.length; edition++) {
//   let cards = multiverse[editions[edition]].cards;
//   let collection = [];
//   for (let card = 0; card < cards.length; card++) {
//     collection.push({
//       "multiverseid": cards[card]["multiverseid"],
//       "name": cards[card]["name"],
//       "manaCost": cards[card]["manaCost"],
//       "type": cards[card]["type"],
//       "editionId": editions[edition],
//       "rarity": cards[card]["rarity"],
//       "colors": cards[card]["colors"],
//       "text": cards[card]["text"],
//       "flavor": cards[card]["flavor"],
//       "power": cards[card]["power"],
//       "toughness": cards[card]["toughness"],
//       "loyalty": cards[card]["loyalty"],
//       "legality": cards[card]["legalities"],
//     });
//     console.log(`Collection build: ${edition}`);
//     console.log(` => now inserting...`);
//     return db("Cards").insert(collection)
//       .then(() => {
//         console.log(` => Added successfully.`);
//       })
//       .catch((err) => {
//         console.log(`Error occurred: ${err}`);
//       })
//   }
// }
// for (let edition of editions) {
// let collectionToInsert = [];
//   multiverse[edition].cards.forEach((card) => {
//     collectionToInsert.push({
//       "multiverseId": card["multiverseid"],
//       "name": card["name"],
//       "manaCost": card["manaCost"],
//       "type": card["type"],
//       "editionId": edition,
//       "rarity": card["rarity"],
//       "colors": card["colors"],
//       "text": card["text"],
//       "flavor": card["flavor"],
//       "power": card["power"],
//       "toughness": card["toughness"],
//       "loyalty": card["loyalty"],
//       "legality": card["legalities"],
//     });
//     db.knex("Cards").insert(collectionToInsert).then(() => {
//       console.log("Edition inserted.")
//     }).catch((err) => {
//       console.log(err)
//     });
//   });
// }