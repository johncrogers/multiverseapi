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
      <div className="col-2">
        <div className="row bg-secondary text-light">
          <div className="col">
            <h4>
              <span className="align-middle">FORMAT:</span>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h7>View a collection:</h7>
            <CollectionSelector
              collectionIds={this.props.collectionIds}
              retrieveCollectionDetails={this.props.retrieveCollectionDetails}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h7>View an edition:</h7>
            <EditionSelector
              editionIds={this.props.editionIds}
              retrieveEditionDetails={this.props.retrieveEditionDetails}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Formats;
