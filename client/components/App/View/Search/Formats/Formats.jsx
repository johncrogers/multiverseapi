import React from "react";
import CollectionSelector from "./Selectors/CollectionSelector.jsx";
import EditionSelector from "./Selectors/EditionSelector.jsx";
class Formats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <span>
        <h2>FORMAT:</h2>
        <h3>View a collection:</h3>
        <CollectionSelector
          collectionIds={this.props.collectionIds}
          retrieveCollectionDetails={this.props.retrieveCollectionDetails}
        />
        <h3>View an edition:</h3>
        <EditionSelector
          editionIds={this.props.editionIds}
          retrieveEditionDetails={this.props.retrieveEditionDetails}
        />
      </span>
    );
  }
}

export default Formats;
