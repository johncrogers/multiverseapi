import React from "react";
class SelectButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(`Render SelectButton`);
    return (
      <button
        className="btn btn-sm btn-success border border-dark"
        onClick={() => {
          this.props.addCardToSelection(this.props.card);
        }}
      >
        Add to Selection
      </button>
    );
  }
}
export default SelectButton;
