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
        className="bg-success"
        onClick={() => {
          this.props.addCardToSelection(this.props.card);
        }}
      >
        +
      </button>
    );
  }
}
export default SelectButton;
