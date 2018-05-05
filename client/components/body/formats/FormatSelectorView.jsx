import React from "react";
class FormatSelectorView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div onClick={this.props.modifySearchResults}>Collections</div>
        <div onClick={this.props.modifySearchResults}>Editions</div>
        <div onClick={this.props.modifySearchResults}>Standard</div>
        <div onClick={this.props.modifySearchResults}>Modern</div>
      </div>
    );
  }
}

export default FormatSelectorView;
