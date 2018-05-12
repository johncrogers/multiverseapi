import React from "react";
import SelectedCard from "./SelectedCard.jsx";
// import Card from "./../results/body/Card.jsx";
class SelectionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.props.clearSelection();
            }}
          >
            Clear
          </button>{" "}
          |{" "}
          <button
            onClick={() => {
              this.props.saveCollection();
            }}
          >
            Save
          </button>
        </div>
        {this.props.selection.length
          ? this.props.selection.map((card, key) => {
              return (
                <SelectedCard
                  key={key}
                  card={card}
                  removeCardFromSelection={this.props.removeCardFromSelection}
                />
              );
            })
          : "No cards selected."}
      </div>
    );
  }
}
export default SelectionView;
