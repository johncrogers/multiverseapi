import React from "react";
import SelectedCard from "./SelectedCard.jsx";
// import Card from "./../results/body/Card.jsx";
class Selection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectionName: ""
    };
  }
  render() {
    return (
      <span>
        <div>
          <h2>
            SELECTION:{" "}
            {this.state.selectionName
              ? this.state.selectionName
              : "No name yet."}
          </h2>
        </div>
        <div>
          <div>
            <label htmlFor="">Selection Name:</label>
            <input
              type="text"
              id="selectionName"
              onChange={event => {
                this.setState({ selectionName: event.target.value });
              }}
            />
          </div>
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
              this.props.saveCollection(this.state.selectionName);
            }}
          >
            Save
          </button>
        </div>
        <br />
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
      </span>
    );
  }
}
export default Selection;
