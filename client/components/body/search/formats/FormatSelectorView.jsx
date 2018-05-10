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
      <div>
        {/* <CollectionSelector
          selectCollection={this.props.selectCollection}
          collectionIds={this.props.collectionIds}
        /> */}
        <EditionSelector
          selectEdition={this.props.selectEdition}
          editionIds={this.props.editionIds}
          selectView={this.props.selectView}
        />
      </div>
    );
  }
}

export default FormatSelectorView;
