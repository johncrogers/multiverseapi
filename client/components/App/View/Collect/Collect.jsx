import React from "react";
import axios from "axios";
import Details from "./Details/Details.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
class Collect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionIds: [],
      collection: {},
      view: {}
    };
    //==========================================================[ DATA ]==========================================================================
    this.retrieveCollectionIds = this.retrieveCollectionIds.bind(this);
    this.retrieveCollectionDetails = this.retrieveCollectionDetails.bind(this);
    //==========================================================[ VIEW ]==========================================================================
    this.loadViewData = this.loadViewData.bind(this);
    //==========================================================[ EDIT ]==========================================================================
    this.updateCollection = this.updateCollection.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.removeCollection = this.removeCollection.bind(this);
  }
  //==========================================================[ DATA ]==========================================================================
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
          // console.log(` -> Called changeView in retrieveCollectionDetails`);
          // this.changeView("collection");
          console.log(`state in retrieveCollectionDetails`, this.state);
          this.loadViewData();
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  //==========================================================[ VIEW ]==========================================================================
  loadViewData() {
    this.setState({ view: this.state.collection }, () => {
      this.retrieveCollectionIds(this.props.userId);
    });
  }
  //==========================================================[ EDIT ]==========================================================================
  updateCollection(collectionId, field, value, update) {
    let data = {
      id: collectionId,
      field: field,
      value: value,
      update: update
    };
    console.log(data);
    axios
      .patch(`/api/collections/`, data)
      .then(response => {
        console.log(`updated collection`);
        this.retrieveCollectionDetails(collectionId);
      })
      .catch(err => {
        console.log(err);
      });
  }
  removeCard(id, collectionId) {
    // let newView = this.state.view;
    // newView.cards = this.state.view.cards.filter(card => {
    //   return card.id !== id;
    // });
    // this.setState({ view: newView });
    axios
      .delete(`/api/collections/id/cards/${id}`)
      .then(response => {
        this.setState({ view: {} }, () => {
          // this.retrieveCollectionIds(this.props.userId);
          this.retrieveCollectionDetails(collectionId);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  removeCollection() {
    axios
      .delete(`/api/collections/${this.state.view.details.id}`)
      .then(response => {
        this.setState({ view: {}, collectionIds: [] }, () => {
          this.retrieveCollectionIds(this.props.userId);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  //==========================================================[ RENDER ]==========================================================================
  componentDidMount() {
    this.retrieveCollectionIds(this.props.userId);
  }
  render() {
    console.log(`Render Collect`);
    return (
      <div>
        <button
          onClick={() => {
            console.log(this.state);
          }}
        >
          Collect State
        </button>
        {/* <button
          onClick={() => {
            this.retrieveCollectionDetails(104);
          }}
        >
          retrieveCollectionDetails
        </button> */}
        {/* <button
          onClick={() => {
            this.removeCard(196);
          }}
        >
          removeCard
        </button> */}
        {/* <button
          onClick={() => {
            this.removeCollection(this.state.view.details.id);
          }}
        >
          Delete Collection
        </button> */}
        {/* <button
          onClick={() => {
            this.updateCollection(
              this.state.view.details.id,
              "name",
              this.state.view.details.name,
              "how bout now?"
            );
          }}
        >
          updateCollection
        </button> */}
        <Sidebar
          collectionIds={this.state.collectionIds}
          retrieveCollectionDetails={this.retrieveCollectionDetails}
        />
        <Details
          username={this.props.username}
          userId={this.props.userId}
          view={this.state.view}
          removeCard={this.removeCard}
          removeCollection={this.removeCollection}
          updateCollection={this.updateCollection}
        />
      </div>
    );
  }
}
export default Collect;
