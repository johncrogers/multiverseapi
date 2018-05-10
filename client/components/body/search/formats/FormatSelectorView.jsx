import React from "react";
import CollectionSelector from "./CollectionSelector.jsx";
class FormatSelectorView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <CollectionSelector selectCollection={this.props.selectCollection} />
        <div>Editions</div>
        {/* <div>Standard</div> */}
        {/* <div>Modern</div> */}
      </div>
    );
  }
}

export default FormatSelectorView;
