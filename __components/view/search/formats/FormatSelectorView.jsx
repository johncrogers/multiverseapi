import React from "react";
import CollectionSelector from "./CollectionSelector.jsx";
import EditionSelector from "./EditionSelector.jsx";
class FormatSelectorView extends React.Component {
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
          selectCollection={this.props.selectCollection}
          collectionIds={this.props.collectionIds}
          selectView={this.props.selectView}
          userId={this.props.userId}
        />
        <h3>View an edition:</h3>
        <EditionSelector
          selectEdition={this.props.selectEdition}
          editionIds={this.props.editionIds}
          selectView={this.props.selectView}
        />
      </span>
    );
  }
}

export default FormatSelectorView;
