import React from "react";
class SelectionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>Selection Header</div>
        <div>No cards selected.</div>
      </div>
    );
  }
}
export default SelectionView;
