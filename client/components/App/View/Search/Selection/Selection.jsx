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
        <div className="row bg-primary text-light">
          <div className="col border border-dark">
            <h4>
              <span className="align-middle">SELECTION:</span>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col alert-secondary border border-dark">
            <div className="row">
              <div className="col">
                <strong>
                  {/* {this.state.selectionName
                ? this.state.selectionName
                : "No name yet."} */}
                  <label htmlFor="">
                    <strong>Name:</strong>
                  </label>
                </strong>
              </div>
            </div>
            <div className="row text-center">
              <div className="col">
                {/* <label htmlFor="">Selection Name:</label> */}

                <input
                  className="border border-dark"
                  type="text"
                  id="selectionName"
                  onChange={event => {
                    this.setState({ selectionName: event.target.value });
                  }}
                />
                <br />
                <hr />
              </div>
            </div>
            <div className="row text-center">
              <div className="col">
                <button
                  className="btn btn-danger btn-sm border border-dark"
                  onClick={() => {
                    this.props.clearSelection();
                  }}
                >
                  Clear
                </button>{" "}
                |{" "}
                <button
                  className="btn btn-success btn-sm border border-dark"
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
          </div>
        </div>
        <div className="row text-center">
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
