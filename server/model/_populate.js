let db = require("db.js");
let multiverse = require("./../../data/local/multiverse.js");

let editions = Object.keys(multiverse);
console.log(db.success);
console.log(JSON.stringify(editions));
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