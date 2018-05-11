import React from "react";
import FormatSelectorView from "./search/formats/FormatSelectorView.jsx";
import ResultsView from "./search/results/ResultsView.jsx";
import FiltersView from "./search/filters/FiltersView.jsx";
import SelectionView from "./search/selection/SelectionView.jsx";
import axios from "axios";

class Body extends React.Component {
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
      currentView: []
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
    // axios.get mrrogers.design/api/editions/:editionId
    // console.log("retrieveEditionDetails");
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
    axios
      .get(`/api/users/${userId}/collections`)
      .then(response => {
        this.setState({ collectionIds: response.data }, () => {
          // console.log("collectionIds", this.state.collectionIds);
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
        // console.log(`retrieveCollectionCards`);
        this.setState({ collectionCards: response.data }, () => {
          // console.log("collectionCards", this.state.collectionCards);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  selectCollection(userId, collectionId) {
    new Promise((resolve, reject) => {
      resolve(this.retrieveCollectionDetails(userId, collectionId));
    })
      .then(() => {
        this.retrieveCollectionCards(userId, collectionId);
      })
      .catch(err => {
        console.log(err);
      });
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
          }, 250);
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
          }, 250);
        }
      );
    }
  }
  setCurrentView(page) {
    let cardsPerPage = 50;
    let end = page * cardsPerPage;
    let begin = end - cardsPerPage;
    // console.log("viewCards", this.state.viewCards);
    // console.log(`begin`, begin);
    // console.log(`end`, end);
    // console.log(`slice`, this.state.viewCards.slice(begin, end));
    this.setState(
      { currentView: this.state.viewCards.slice(begin, end) },
      () => {
        console.log("currentView", this.state.currentView);
      }
    );
  }
  componentDidMount() {
    this.retrieveCollectionIds("1");
    this.retrieveEditionIds();
    this.selectEdition("LEA");
    setTimeout(() => {
      this.selectView("edition");
    }, 500);
  }
  render() {
    return (
      <div>
        <FormatSelectorView
          selectEdition={this.selectEdition}
          selectCollection={this.selectCollection}
          editionIds={this.state.editionIds}
          collectionIds={this.state.collectionIds}
          selectView={this.selectView}
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
        />
        <FiltersView />
        <SelectionView />
      </div>
    );
  }
}

export default Body;
