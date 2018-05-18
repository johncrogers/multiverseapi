import React from "react";
class SelectedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.removeCardFromSelection(this.props.card.multiverseId);
          }}
        >
          Remove
        </button>
        <button
          onClick={() => {
            console.log(this.props.card);
          }}
        >
          card
        </button>
        <span>{this.props.card.name}</span>
      </div>
    );
  }
}
export default SelectedCard;
