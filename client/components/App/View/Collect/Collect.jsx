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
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
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
            this.retrieveCollectionDetails(98);
          }}
        >
          retrieveCollectionIds
        </button>
        <Sidebar collectionIds={this.state.collectionIds} />
        <Details />
      </div>
    );
  }
}
export default Collect;
