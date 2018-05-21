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
      <div className="col-2">
        <div className="row">
          <div className="col">
            <h4>SELECTION:</h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <strong>
              {this.state.selectionName
                ? this.state.selectionName
                : "No name yet."}
            </strong>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* <label htmlFor="">Selection Name:</label> */}
            <input
              type="text"
              id="selectionName"
              onChange={event => {
                this.setState({ selectionName: event.target.value });
              }}
            />
            <br />
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col">
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
            <br />
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col">
            {this.props.selection.length
              ? this.props.selection.map((card, key) => {
                  return (
                    <SelectedCard
                      key={key}
                      card={card}
                      removeCardFromSelection={
                        this.props.removeCardFromSelection
                      }
                    />
                  );
                })
              : "No cards selected."}
          </div>
        </div>
      </div>
    );
  }
}
export default Selection;
