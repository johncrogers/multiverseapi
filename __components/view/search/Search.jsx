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
      selection: [],
      view: "edition",
      viewDetails: {},
      viewCards: [],
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
    this.modifyFilters = this.modifyFilters.bind(this);
    this.applyFilters = this.applyFilters.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
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
    // console.log(`Executing retreiveEditionIds:`);
    axios
      .get("/api/editions")
      .then(response => {
        this.setState({ editionIds: response.data }, () => {});
        // console.log(` -> State @ retreiveEditionIds`, this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }
  retrieveEditionDetails(editionId) {
    // console.log(`Executing retreiveEditionDetails:`);
    axios
      .get(`/api/editions/${editionId}`)
      .then(response => {
        this.setState({ editionDetails: response.data }, () => {
          // console.log(` -> State @ retrieveEditionDetails`, this.state);
          // console.log(` -> Called setCurrentView in retrieveEditionDetails`);
          this.setCurrentView(1);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  retrieveEditionCards(editionId) {
    // console.log(`Executing retreiveEditionCards:`);
    axios
      .get(`/api/editions/${editionId}/cards`)
      .then(response => {
        this.setState({ editionCards: response.data }, () => {
          // console.log(` -> State @ retrieveEditionCards`, this.state);
          // console.log(` -> Called setCurrentView in retrieveEdtionCards`);
          this.selectView("edition");
          // this.setCurrentView(1);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  selectEdition(editionId) {
    // console.log(`Executing selectEdition:`);
    // console.log(` -> Called retrieveEditionDetails`);
    this.retrieveEditionDetails(editionId);
    // console.log(` -> Called retrieveEditionCards`);
    this.retrieveEditionCards(editionId);
  }
  retrieveCollectionIds(userId) {
    // console.log(`Executing retreiveCollectionIds:`);
    axios
      .get(`/api/users/${userId}/collections`)
      .then(response => {
        this.setState({ collectionIds: response.data }, () => {
          // console.log(` -> State @ retrieveCollectionIds`, this.state);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  retrieveCollectionDetails(userId, collectionId) {
    // console.log(`Executing retreiveCollectionDetails:`);
    axios
      .get(`/api/users/${userId}/collections/${collectionId}`)
      .then(response => {
        this.setState({ collectionDetails: response.data }, () => {
          // console.log(` -> State @ retrieveCollectionDetails`, this.state);
          // console.log(` -> Called setCurrentView`);
          this.setCurrentView(1);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  retrieveCollectionCards(userId, collectionId) {
    // console.log(`Executing retreiveCollectionCards:`);
    axios
      .get(`/api/users/${userId}/collections/${collectionId}/cards`)
      .then(response => {
        this.setState({ collectionCards: response.data }, () => {
          // console.log(` -> State @ retrieveCollectionCards`, this.state);
          // console.log(` -> Called setCurrentView`);
          // this.setCurrentView(1);
          this.selectView("collection");
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  selectCollection(userId, collectionId) {
    // console.log(`Executing selectCollection:`);
    // console.log(` -> Called retrieveCollectionDetails in selectCollection`);
    this.retrieveCollectionDetails(userId, collectionId);
    // console.log(` -> Called retrieveCollectionCards in selectCollection`);
    this.retrieveCollectionCards(userId, collectionId);
  }
  // FILTER:
  addFilter(property, value) {
    let newFilters = this.state.filters;
    newFilters[property] = value;
    this.setState({ filters: newFilters }, () => {
      this.applyFilters();
    });
  }
  removeFilter(property) {
    let newFilters = this.state.filters;
    delete newFilters[property];
    this.setState({ filters: newFilters }, () => {
      this.applyFilters();
    });
  }
  modifyFilters() {
    //
  }
  applyFilters() {
    // FIX
    let canShowCard = card => {
      let show = true;
      Object.keys(this.state.filters).forEach(filter => {
        if (this.state.filters[filter] !== card[filter]) {
          show = false;
        }
      });
      return show;
    };

    let newViewCards = this.state.viewCards.filter(card => {
      return canShowCard(card);
    });
    // console.log(`newViewCards: `, newViewCards);
    this.setState({ currentView: newViewCards });
    // setTimeout(() => {
    //   this.changeView();
    // }, 125);
  }
  clearFilters() {
    this.setState({ filters: {} }, () => {
      this.applyFilters();
    });
  }
  // SELECT:
  selectCard() {
    //
  }
  deselectCard() {
    //
  }
  selectView(type) {
    // console.log(`Executing selectView:`);
    if (type === "collection") {
      this.setState(
        {
          view: type
        },
        () => {
          // console.log(` -> State @ selectView`, this.state);
          // console.log(` -> Called changeView`);
          this.changeView();
        }
      );
    }
    if (type === "edition") {
      this.setState(
        {
          view: type
        },
        () => {
          this.changeView();
          // console.log(` -> State @ selectView`, this.state);
          // console.log(` -> Called changeView`);
        }
      );
    }
  }
  changeView() {
    // console.log(`Executing changeView:`);
    if (this.state.view === "collection") {
      this.setState(
        {
          viewDetails: this.state.collectionDetails,
          viewCards: this.state.collectionCards
        },
        () => {
          // console.log(` -> State @ changeView`, this.state);
          // console.log(` -> Called setCurrentView`);
          this.setCurrentView(1);
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
          // console.log(` -> State @ changeView`, this.state);
          // console.log(` -> Called setCurrentView`);
          this.setCurrentView(1);
        }
      );
    }
  }
  setCurrentView(page) {
    // console.log(`Executing setCurrentView:`);
    // console.log(`page: `, page);
    let end;
    let begin;
    if (page === 1) {
      // console.log(`if`);
      end = 25;
      begin = 0;
    } else {
      // console.log(`else`);
      end = page * this.state.cardsPerPage;
      begin = end - this.state.cardsPerPage;
    }
    // console.log("Begin: ", begin);
    // console.log("End: ", end);
    let newCurrentViewCards = this.state.viewCards.slice(begin, end);
    // console.log(`newCurrentViewCards`, newCurrentViewCards);
    this.setState({ currentView: newCurrentViewCards }, () => {
      // console.log(` -> State @ setCurrentView`, this.state);
    });
  }
  changePage(num) {
    this.setCurrentView(num);
  }
  handlePageChangeClick(direction) {
    // console.log(`State page: `, this.state.page);
    let newPage;
    if (direction === "prev") {
      newPage = this.state.page - 1;
      if (newPage < 1) {
        newPage = 1;
      }
      // console.log(` -> page after previos: ${newPage}`);
      this.setState({ page: newPage }, () => {
        this.changePage(this.state.page);
      });
    }
    if (direction === "next") {
      newPage = this.state.page + 1;
      // console.log(
      //   "Last page: ",
      //   Math.ceil(this.state.viewCards.length / this.state.cardsPerPage)
      // );
      if (
        newPage >
        Math.ceil(this.state.viewCards.length / this.state.cardsPerPage)
      ) {
        newPage = Math.ceil(
          this.state.viewCards.length / this.state.cardsPerPage
        );
      }
      // console.log(` -> page after next: ${newPage}`);
      this.setState({ page: newPage }, () => {
        this.changePage(this.state.page);
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
    let selection = [];
    this.state.selection.map(card => {
      selection.push({
        multiverseId: card.multiverseid,
        collection_id: ""
      });
    });
    // console.log(selection);
    // console.log("userId: ", this.props.userId);
    let newCollection = {
      name: name,
      type: "search",
      userId: this.props.userId,
      description: description || null,
      cards: selection
    };
    // console.log(`userId @ save collection`, this.props.userId);
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
    this.selectView("edition");
    // setTimeout(() => {
    // }, 500);
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
        </button> */}
        <button
          onClick={() => {
            console.log(this.state);
          }}
        >
          State
        </button>
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
          filters={this.state.filters}
          addFilter={this.addFilter}
          removeFilter={this.removeFilter}
        />
        <FiltersView
          clearFilters={this.clearFilters}
          filters={this.state.filters}
          removeFilter={this.removeFilter}
        />
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
