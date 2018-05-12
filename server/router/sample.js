// {
//   "name": "Test Collection",
//   "type": "search",
//   "userId": 1,
//   "description": "Insertion test."
//   "cards": [{
//     "id": 25304,
//     "multiverseid": "107",
//     "name": "Invisibility",
//     "manaCost": "{U}{U}",
//     "type": "Enchantment — Aura",
//     "editionId": "LEA",
//     "rarity": "Common",
//     "colors": "[\"Blue\"]",
//     "text": "Enchant creature\nEnchanted creature can't be blocked except by Walls.",
//     "flavor": null,
//     "power": null,
//     "toughness": null,
//     "loyalty": null
//   }]​​​​​
// }
// console.log(JSON.stringify([{
//   "id": 25304,
//   "multiverseid": "107",
//   "name": "Invisibility",
//   "manaCost": "{U}{U}",
//   "type": "Enchantment — Aura",
//   "editionId": "LEA",
//   "rarity": "Common",
//   "colors": "[\"Blue\"]",
//   "text": "Enchant creature\nEnchanted creature can't be blocked except by Walls.",
//   "flavor": null,
//   "power": null,
//   "toughness": null,
//   "loyalty": null
// }]));

let selection = [];
this.state.selection.map((card) => {
  selection.push({
    multiverseId: card.multiverseId,
    collection_id: collectionId
  })
})