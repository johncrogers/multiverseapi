import React from "react";
class SelectedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col">
          <span>{this.props.card.name}</span>
        </div>
        <div className="col">
          <button
            // className=""
            onClick={() => {
              this.props.removeCardFromSelection(this.props.card.id);
            }}
          >
            &times;
          </button>
        </div>
      </div>
    );
  }
}
export default SelectedCard;
