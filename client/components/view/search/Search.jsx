import React from "react";
import FormatSelectorView from "./formats/FormatSelectorView.jsx";
import ResultsView from "./results/ResultsView.jsx";
import FiltersView from "./filters/FiltersView.jsx";
import SelectionView from "./selection/SelectionView.jsx";
import axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editionIds: [],
      editionDetails: {},
      editionCards: [],
      collectionIds: [],
      collectionDetails: {},
      collectionCards: [],
      filters: {},
      filterResults: [],
      selection: [],
      view: "edition",
      viewDetails: {},
      viewCards: {},
      currentView: [],
      cardsPerPage: 25,
      page: 1,
      userId: 1
    };
    this.retrieveEditionIds = this.retrieveEditionIds.bind(this);
    this.retrieveEditionDetails = this.retrieveEditionDetails.bind(this);
    this.retrieveEditionCards = this.retrieveEditionCards.bind(this);
    this.selectEdition = this.selectEdition.bind(this);
    this.retrieveCollectionIds = this.retrieveCollectionIds.bind(this);
    this.retrieveCollectionDetails = this.retrieveCollectionDetails.bind(this);
    this.retrieveCollectionCards = this.retrieveCollectionCards.bind(this);
    this.selectCollection = this.selectCollection.bind(this);
    this.addFilter = this.addFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.applyFilters = this.applyFilters.bind(this);
    this.selectCard = this.selectCard.bind(this);
    this.deselectCard = this.deselectCard.bind(this);
    this.selectView = this.selectView.bind(this);
    this.setCurrentView = this.setCurrentView.bind(this);
    this.changePage = this.changePage.bind(this);
    this.handlePageChangeClick = this.handlePageChangeClick.bind(this);
    this.addCardToSelection = this.addCardToSelection.bind(this);
    this.removeCardFromSelection = this.removeCardFromSelection.bind(this);
    this.clearSelection = this.clearSelection.bind(this);
    this.saveCollection = this.saveCollection.bind(this);
  }
  // RETRIEVE:
  retrieveEditionIds() {
    // axios.get mrrogers.design/api/editions
    // console.log("retrieveEditionIds");
    axios
      .get("/api/editions")
      .then(response => {
        // console.log(response);
        this.setState({ editionIds: response.data }, () => {
          // console.log("editionIds", this.state.editionIds);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  retrieveEditionDetails(editionId) {
    axios
      .get(`/api/editions/${editionId}`)
      .then(response => {
        this.setState({ editionDetails: response.data }, () => {
          // console.log("editionDetails", this.state.editionDetails);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  retrieveEditionCards(editionId) {
    // axios.get mrrogers.design/api/editions/:editionId
    // console.log("retrieveEditionCards");
    axios
      .get(`/api/editions/${editionId}/cards`)
      .then(response => {
        this.setState({ editionCards: response.data }, () => {
          // console.log("editionCards", this.state.editionCards);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  selectEdition(editionId) {
    new Promise((resolve, reject) => {
      resolve(this.retrieveEditionDetails(editionId));
    })
      .then(() => {
        this.retrieveEditionCards(editionId);
      })
      .catch(() => {
        console.log(`ERROR retrieving edition.`);
      });
  }
  retrieveCollectionIds(userId) {
    // axios.get mrrogers.design/api/users/:userId/collections
    // console.log(`retrieveCollectionIds`);
    // console.log(userId);
    axios
      .get(`/api/users/${userId}/collections`)
      .then(response => {
        this.setState({ collectionIds: response.data }, () => {
          console.log("collectionIds", this.state.collectionIds);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  retrieveCollectionDetails(userId, collectionId) {
    // axios.get mrrogers.design/api/users/:userId/collections/:collectionId
    // console.log("retrieveCollectionDetails");
    axios
      .get(`/api/users/${userId}/collections/${collectionId}`)
      .then(response => {
        this.setState({ collectionDetails: response.data }, () => {
          // console.log("collectionDetails", this.state.collectionDetails);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  retrieveCollectionCards(userId, collectionId) {
    // axios.get mrrogers.design/api/users/:userId/collections/:collectionId/cards
    axios
      .get(`/api/users/${userId}/collections/${collectionId}/cards`)
      .then(response => {
        console.log("response @ retrievecollectioncards", response);
        this.setState({ collectionCards: response.data }, () => {
          // console.log("collectionCards", this.state.collectionCards);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  selectCollection(userId, collectionId) {
    // new Promise((resolve, reject) => {
    //   resolve();
    // })
    //   .then(() => {})
    //   .catch(err => {
    //     console.log(err);
    //   });
    this.retrieveCollectionDetails(userId, collectionId);
    this.retrieveCollectionCards(userId, collectionId);
  }
  // FILTER:
  addFilter() {
    //
  }
  removeFilter() {
    //
  }
  applyFilters() {
    //
  }
  // SELECT:
  selectCard() {
    //
  }
  deselectCard() {
    //
  }
  selectView(type) {
    if (type === "collection") {
      this.setState(
        {
          view: type
        },
        () => {
          setTimeout(() => {
            this.changeView();
          }, 500);
        }
      );
    }
    if (type === "edition") {
      this.setState(
        {
          view: type
        },
        () => {
          setTimeout(() => {
            this.changeView();
          }, 500);
        }
      );
    }
  }
  changeView() {
    // console.log(
    //   `Select > Onchange > setState > selectView > if edition > setState > changeView`
    // );
    if (this.state.view === "collection") {
      this.setState(
        {
          viewDetails: this.state.collectionDetails,
          viewCards: this.state.collectionCards
        },
        () => {
          // console.log(this.state);
          setTimeout(() => {
            this.setCurrentView(1);
          }, 500);
        }
      );
    }
    if (this.state.view === "edition") {
      this.setState(
        {
          viewDetails: this.state.editionDetails,
          viewCards: this.state.editionCards
        },
        () => {
          // console.log(this.state.viewCards);
          setTimeout(() => {
            this.setCurrentView(1);
          }, 500);
        }
      );
    }
  }
  setCurrentView(page) {
    let end = page * this.state.cardsPerPage;
    let begin = end - this.state.cardsPerPage;
    // console.log("viewCards", this.state.viewCards);
    // console.log(`begin`, begin);
    // console.log(`end`, end);
    // console.log(`slice`, this.state.viewCards.slice(begin, end));
    this.setState(
      { currentView: this.state.viewCards.slice(begin, end) },
      () => {
        // console.log("currentView", this.state.currentView);
      }
    );
  }
  changePage(num) {
    this.setCurrentView(num);
  }
  handlePageChangeClick(direction) {
    if (direction === "prev") {
      this.setState({ page: this.state.page - 1 }, () => {
        this.changePage(this.state.page - 1);
      });
    }
    if (direction === "next") {
      this.setState({ page: this.state.page + 1 }, () => {
        this.changePage(this.state.page + 1);
      });
    }
  }
  addCardToSelection(card) {
    let newSelection = this.state.selection;
    newSelection.push(card);
    this.setState({ selection: newSelection }, () => {
      // console.log("Selection:", this.state.selection);
    });
  }
  removeCardFromSelection(multiverseId) {
    let targetIndex = this.state.selection.indexOf(multiverseId);
    let newSelection = this.state.selection;
    newSelection.splice(targetIndex, 1);
    this.setState({ selection: newSelection }, () => {
      // console.log(this.state.selection);
    });
  }
  clearSelection() {
    this.setState({ selection: [] });
  }
  saveCollection(name, description) {
    // {
    //   "name": "Test Collection",
    //     "type": "search",
    //       "userId": 1,
    //         "description": "Insertion test."
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
    //   }]
    // }
    let selection = [];
    this.state.selection.map(card => {
      selection.push({
        multiverseId: card.multiverseid,
        collection_id: ""
      });
    });
    console.log(selection);
    console.log("userId: ", this.props.userId);
    let newCollection = {
      name: name,
      type: "search",
      userId: this.props.userId,
      description: description || null,
      cards: selection
    };
    console.log(`userId @ save collection`, this.props.userId);
    axios
      .post("/api/collections/", newCollection)
      .then(response => {
        // console.log(response);
        // console.log("Collection saved.");
        this.retrieveCollectionIds(this.props.userId);
      })
      .catch(err => {
        console.log(err);
      });
  }
  componentDidMount() {
    this.retrieveCollectionIds(this.props.userId);
    this.retrieveEditionIds();
    this.selectEdition("LEA");
    setTimeout(() => {
      this.selectView("edition");
    }, 500);
  }
  render() {
    return (
      <div>
        {/* <button
          onClick={() => {
            console.log(this.props.userId);
            this.retrieveCollectionIds(this.props.userId);
          }}
        >
          Get Collections
        </button>
        <button
          onClick={() => {
            console.log(this.state);
          }}
        >
          State
        </button> */}
        <FormatSelectorView
          selectEdition={this.selectEdition}
          selectCollection={this.selectCollection}
          editionIds={this.state.editionIds}
          collectionIds={this.state.collectionIds}
          selectView={this.selectView}
          userId={this.props.userId}
        />
        <ResultsView
          editionDetails={this.state.editionDetails}
          editionCards={this.state.editionCards}
          collectionDetails={this.state.collectionDetails}
          collectionCards={this.state.collectionCards}
          viewDetails={this.state.viewDetails}
          viewCards={this.state.viewCards}
          selectView={this.selectView}
          currentView={this.state.currentView}
          setCurrentView={this.setCurrentView}
          cardsPerPage={this.state.cardsPerPage}
          handlePageChangeClick={this.handlePageChangeClick}
          addCardToSelection={this.addCardToSelection}
          view={this.state.view}
        />
        {/* <FiltersView /> */}
        <SelectionView
          selection={this.state.selection}
          removeCardFromSelection={this.removeCardFromSelection}
          clearSelection={this.clearSelection}
          saveCollection={this.saveCollection}
          username={this.props.username}
        />
      </div>
    );
  }
}

export default Search;
