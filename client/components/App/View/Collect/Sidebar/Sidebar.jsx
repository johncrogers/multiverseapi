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
      <div className="col-2">
        <div className="row bg-secondary text-light">
          <div className="col border border-dark">
            <h4>
              <span className="align-middle">Collections:</span>
            </h4>
          </div>
        </div>
        <CollectionSelector
          collectionIds={this.props.collectionIds}
          retrieveCollectionDetails={this.props.retrieveCollectionDetails}
        />
      </div>
    );
  }
}
export default Sidebar;
