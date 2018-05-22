import React from "react";
import Formats from "./Formats/Formats.jsx";
import Results from "./Results/Results.jsx";
import Filters from "./Filters/Filters.jsx";
import Selection from "./Selection/Selection.jsx";
import axios from "axios";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editionIds: [],
      edition: {},
      collectionIds: [],
      collection: {},
      show: "edition",
      view: {},
      filters: {},
      cardsPerPage: 10,
      page: 0,
      selection: []
    };
    // DATA:
    this.retrieveEditionIds = this.retrieveEditionIds.bind(this);
    this.retrieveEditionDetails = this.retrieveEditionDetails.bind(this);
    this.retrieveCollectionIds = this.retrieveCollectionIds.bind(this);
    this.retrieveCollectionDetails = this.retrieveCollectionDetails.bind(this);
    this.reloadCollection = this.reloadCollection.bind(this);

    // VIEW:
    this.changeView = this.changeView.bind(this);
    this.loadViewData = this.loadViewData.bind(this);

    // FILTERS:
    this.addFilter = this.addFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.applyFilters = this.applyFilters.bind(this);
    this.clearFilters = this.clearFilters.bind(this);

    // SORT:
    // this.sortCards = this.sortCards.bind(this);

    // PAGE:
    this.viewPreviousResults = this.viewPreviousResults.bind(this);
    this.viewNextResults = this.viewNextResults.bind(this);
    this.changeResultsPerPage = this.changeResultsPerPage.bind(this);

    // SELECTION:
    this.addCardToSelection = this.addCardToSelection.bind(this);
    this.removeCardFromSelection = this.removeCardFromSelection.bind(this);
    this.clearSelection = this.clearSelection.bind(this);
    this.saveCollection = this.saveCollection.bind(this);
    this.addCardToCollection = this.addCardToCollection.bind(this);
  }
  //==========================================================[ RETRIEVE DATA ]==========================================================================
  retrieveEditionIds() {
    console.log(`retrieveEditionIds`);
    axios
      .get("/api/editions")
      .then(response => {
        this.setState({ editionIds: response.data }, () => {});
      })
      .catch(err => {
        console.log(err);
      });
  }
  retrieveEditionDetails(editionId) {
    console.log(`retrieveEditionDetails`);
    axios
      .get(`/api/editions/${editionId}`)
      .then(response => {
        this.setState(
          {
            edition: response.data
          },
          () => {
            console.log(` -> Called changeView in retrieveEditionDetails`);
            this.changeView("edition");
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }
  retrieveCollectionIds(userId) {
    console.log(`retrieveCollectionDetails`);
    axios
      .get(`/api/users/${userId}/collections`)
      .then(response => {
        this.setState({ collectionIds: response.data }, () => {});
      })
      .catch(err => {
        console.log(err);
      });
  }
  retrieveCollectionDetails(collectionId) {
    console.log(`retrieveCollectionDetails`);
    axios
      .get(`/api/users/id/collections/${collectionId}`)
      .then(response => {
        this.setState({ collection: response.data }, () => {
          console.log(` -> Called changeView in retrieveCollectionDetails`);
          this.changeView("collection");
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  reloadCollection(collectionId) {
    console.log(`retrieveCollectionDetails`);
    axios
      .get(`/api/users/id/collections/${collectionId}`)
      .then(response => {
        this.setState({ collection: response.data }, () => {
          console.log(` -> Called changeView in retrieveCollectionDetails`);
          // this.changeView("collection");
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  //==========================================================[ VIEW ]==========================================================================

  changeView(view) {
    console.log(`changeView`);
    if (view === "collection") {
      this.setState(
        {
          show: view,
          page: 0
        },
        () => {
          console.log(` -> Called loadViewData in selectView`);
          this.loadViewData();
        }
      );
    }
    if (view === "edition") {
      this.setState(
        {
          show: view,
          page: 0
        },
        () => {
          console.log(` -> Called loadViewData in selectView`);
          this.loadViewData();
        }
      );
    }
  }
  loadViewData() {
    console.log(`loadViewData`);
    if (this.state.show === "collection") {
      this.setState(
        {
          view: this.state.collection
        },
        () => {
          console.log(` -> Called applyFilters in loadViewData`);
          this.applyFilters(this.state.view.cards);
        }
      );
    }
    if (this.state.show === "edition") {
      this.setState(
        {
          view: this.state.edition
        },
        () => {
          console.log(` -> Called applyFilters in loadViewData`);
          this.applyFilters(this.state.view.cards);
        }
      );
    }
  }

  //==========================================================[ FILTER ]==========================================================================

  addFilter(property, value) {
    console.log(`addFilter`);
    let newFilters = this.state.filters;
    newFilters[property] = value;
    this.setState({ filters: newFilters, page: 0 }, () => {
      console.log(` -> Called applyFilters in addFilter`);
      this.applyFilters();
    });
  }
  removeFilter(property) {
    console.log(`removeFilter`);
    let newFilters = this.state.filters;
    delete newFilters[property];
    this.setState({ filters: newFilters, page: 0 }, () => {
      console.log(` -> Called applyFilters in removeFilter`);
      this.applyFilters();
    });
  }
  // applyFilters() {
  /*
      - canShow = (card) => {
        - show = false
        - Object.keys(this.state.filters).forEach(filter=>{
          - if card[filter].includes(filters[filter])
            - show = true
        })
        - return show
      }
      - if !filters
        - pass results
      - if filters
        - view.cards.filter(return canShow(card))
    */
  // }
  applyFilters() {
    console.log(`applyFilters`);
    let canShowCard = card => {
      let show = true;
      Object.keys(this.state.filters).forEach(filter => {
        if (this.state.filters[filter] !== card[filter]) {
          show = false;
        }
      });
      return show;
    };
    let results = this.state.view.cards.filter(card => {
      return canShowCard(card);
    });
    console.log(` -> Called sortCards in applyFilters`);
    this.sortCards(results);
  }
  clearFilters() {
    console.log(`clearFilters`);
    this.setState({ filters: {} }, () => {
      this.applyFilters();
    });
  }

  //==========================================================[ SORT ]==========================================================================

  sortCards(cards) {
    console.log(`sortCards`);
    console.log(` -> Called pageCards in sortCards`);
    this.pageCards(cards);
  }

  //==========================================================[ PAGE ]==========================================================================

  pageCards(cards) {
    console.log(`pageCards`);
    let results = [];
    while (cards.length) {
      results.push(cards.splice(0, this.state.cardsPerPage));
    }
    let newView = this.state.view;
    newView.results = results;
    console.log(` -> Called setState in pageCards`);
    this.setState({ view: newView }, () => {});
  }
  viewPreviousResults() {
    let currentPage = this.state.page;
    if (currentPage > 0) {
      currentPage--;
      this.setState({ page: currentPage });
    }
  }
  viewNextResults() {
    let currentPage = this.state.page;
    if (currentPage < this.state.view.results.length - 1) {
      currentPage++;
      this.setState({ page: currentPage });
    }
  }
  changeResultsPerPage(number) {
    this.setState({ cardsPerPage: number }, () => {
      this.loadViewData();
    });
  }

  //==========================================================[ SELECTION ]==========================================================================

  addCardToSelection(card) {
    console.log(`addCardToSelection`);
    let newSelection = this.state.selection;
    newSelection.push(card);
    this.setState({ selection: newSelection }, () => {});
  }
  removeCardFromSelection(id) {
    console.log(`removeCardFromSelection`);
    // let targetIndex = this.state.selection.indexOf(multiverseId);
    // console.log(`multiverseid: ${multiverseId}`);
    // console.log(`newSelection: `, newSelection);
    // console.log(`targetIndex: ${targetIndex}`);
    // console.log(`newSelection after change: `, newSelection);
    let selectionIds = [];
    for (let card of this.state.selection) {
      selectionIds.push(card.id);
    }
    console.log(`selectionIds: `, selectionIds);
    let targetIndex = selectionIds.indexOf(id);
    console.log(`targetIndex: `, targetIndex);
    let newSelection = this.state.selection;
    console.log(`newSelection: `, newSelection);
    newSelection.splice(targetIndex, 1);
    console.log(`newSelection after splice: `, newSelection);
    this.setState({ selection: newSelection }, () => {});
  }
  clearSelection() {
    console.log(`clearSelection`);
    this.setState({ selection: [] });
  }
  saveCollection(name, description) {
    console.log(`saveCollection`);
    let selection = [];
    this.state.selection.map(card => {
      selection.push({
        multiverseId: card.multiverseid,
        collection_id: ""
      });
    });
    let newCollection = {
      name: name,
      type: "search",
      userId: this.props.userId,
      description: description || null,
      cards: selection
    };
    axios
      .post("/api/collections/", newCollection)
      .then(response => {
        console.log(` -> Called retrieveCollectionIds in saveCollection`);
        this.setState({ selection: [] }, () => {
          this.retrieveCollectionIds(this.props.userId);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  addCardToCollection(multiverseId, collectionId) {
    console.log(`addCardToCollection`);
    console.log(`Input addCardToCollection`, multiverseId, collectionId);
    // axios to add
    // retrieve collection
    axios
      .post("/api/collections/cards", {
        multiverseid: multiverseId,
        collection_id: collectionId
      })
      .then(() => {
        // this.retrieveCollectionDetails(collectionId);
        this.reloadCollection(collectionId);
      })
      .catch(err => {
        console.log(err);
      });
  }
  //==========================================================[ RENDER ]==========================================================================
  componentDidMount() {
    console.log(` -> Called retrieveEditionIds in componentDidMount`);
    this.retrieveEditionIds();
    console.log(` -> Called retrieveCollectionIds in componentDidMount`);
    this.retrieveCollectionIds(this.props.userId);
    console.log(
      ` -> Called retrieveEditionDetails("LEA") in componentDidMount`
    );
    this.retrieveEditionDetails("LEA");
  }
  render() {
    return (
      <div className="row">
        <Formats
          editionIds={this.state.editionIds}
          retrieveEditionDetails={this.retrieveEditionDetails}
          collectionIds={this.state.collectionIds}
          retrieveCollectionDetails={this.retrieveCollectionDetails}
        />
        <Results
          collectionId={
            this.state.collection.details
              ? this.state.collection.details.id
              : null
          }
          collectionName={
            this.state.collection.details
              ? this.state.collection.details.name
              : null
          }
          // colle
          view={this.state.view}
          show={this.state.show}
          changeView={this.changeView}
          page={this.state.page}
          viewPreviousResults={this.viewPreviousResults}
          viewNextResults={this.viewNextResults}
          addFilter={this.addFilter}
          removeFilter={this.removeFilter}
          filters={this.state.filters}
          addCardToSelection={this.addCardToSelection}
          addCardToCollection={this.addCardToCollection}
          changeResultsPerPage={this.changeResultsPerPage}
        />
        <Filters
          clearFilters={this.clearFilters}
          filters={this.state.filters}
          removeFilter={this.removeFilter}
          addFilter={this.addFilter}
        />
        <Selection
          selection={this.state.selection}
          removeCardFromSelection={this.removeCardFromSelection}
          clearSelection={this.clearSelection}
          saveCollection={this.saveCollection}
          username={this.props.username}
        />
        {/* <button
          onClick={() => {
            console.log(this.state);
          }}
        >
          Search State
        </button> */}
      </div>
    );
  }
}

export default Search;
