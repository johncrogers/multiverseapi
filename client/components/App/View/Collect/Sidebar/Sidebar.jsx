import React from "react";
import CollectionSelector from "./../../Search/Formats/Selectors/CollectionSelector.jsx";
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render Sidebar`);
    return (
      <div>
        <h2>Select a Collection:</h2>
        <CollectionSelector
          collectionIds={this.props.collectionIds}
          retrieveCollectionDetails={this.props.retrieveCollectionDetails}
        />
      </div>
    );
  }
}
export default Sidebar;
