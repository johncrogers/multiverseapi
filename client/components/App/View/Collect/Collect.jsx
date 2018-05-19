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
          this.loadViewData();
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  //==========================================================[ VIEW ]==========================================================================
  loadViewData() {
    this.setState({ view: this.state.collection });
  }
  //==========================================================[ EDIT ]==========================================================================
  removeCard(id) {
    let newView = this.state.view;
    newView.cards = this.state.view.cards.filter(card => {
      return card.id !== id;
    });
    this.setState({ view: newView });
  }
  removeCollection() {
    axios
      .delete(`/api/collections/${this.state.view.details.id}`)
      .then(response => {
        this.setState({ view: {} }, () => {
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
        <button
          onClick={() => {
            this.retrieveCollectionDetails(103);
          }}
        >
          retrieveCollectionDetails
        </button>
        <button
          onClick={() => {
            this.removeCard(196);
          }}
        >
          removeCard
        </button>
        <button
          onClick={() => {
            this.removeCollection(103);
          }}
        >
          Delete Collection
        </button>
        <Sidebar collectionIds={this.state.collectionIds} />
        <Details />
      </div>
    );
  }
}
export default Collect;
