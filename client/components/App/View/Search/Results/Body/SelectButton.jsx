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
        onClick={() => {
          this.props.addCardToSelection(this.props.card);
        }}
      >
        Add to selection
      </button>
    );
  }
}
export default SelectButton;
