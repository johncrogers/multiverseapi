import React from "react";
class FormatSelectorView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>Collections</div>
        <div>Editions</div>
        <div>Standard</div>
        <div>Modern</div>
      </div>
    );
  }
}

export default FormatSelectorView;
