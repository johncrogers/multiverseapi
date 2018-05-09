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
      selection: []
    };
    this.retrieveEditionsIds.bind(this);
    this.retrieveEditionDetails.bind(this);
    this.retrieveEditionCards.bind(this);
    this.selectEdition.bind(this);
    this.retrieveCollectionIds.bind(this);
    this.retrieveCollectionDetails.bind(this);
    this.retrieveCollectionCards.bind(this);
    this.selectCollection.bind(this);
    this.addFilter.bind(this);
    this.removeFilter.bind(this);
    this.applyFilters.bind(this);
    this.selectCard.bind(this);
    this.deselectCard.bind(this);
  }
  // RETRIEVE:
  retrieveEditionsIds() {
    // axios.get mrrogers.design/api/editions
    // console.log("retrieveEditionsIds");
    axios
      .get("/api/editions")
      .then(response => {
        // console.log(response);
        this.setState({ editionIds: response.data }, () => {
          // console.log(this.state.editionIds);
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
          console.log(this.state);
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
          console.log(this.state);
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
          console.log(this.state.collectionIds);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  retrieveCollectionDetails(userId, collectionId) {
    // axios.get mrrogers.design/api/users/:userId/collections/:collectionId
    console.log("retrieveCollectionDetails");
    axios
      .get(`/api/users/${userId}/collections/${collectionId}`)
      .then(response => {
        console.log(response);

        this.setState({ collectionDetails: response.data }, () => {
          console.log(this.state);
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
        console.log(`retrieveCollectionCards`);
        this.setState({ collectionCards: response.data }, () => {
          console.log(this.state);
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
      .catch(() => {
        console.log(`ERROR retrieving collection.`);
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
  componentDidMount() {
    //
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.selectCollection(0, 1);
          }}
        >
          Function Tester
        </button>
        <FormatSelectorView />
        <ResultsView />
        <FiltersView />
        <SelectionView />
      </div>
    );
  }
}

export default Body;
