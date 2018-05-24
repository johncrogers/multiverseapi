import React from "react";
import Card from "./Card.jsx";
import SelectButton from "./SelectButton.jsx";
import AddButton from "./AddButton.jsx";
class ResultsBodyDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // this.props.cards ? console.log("Cards should exist: ", this.props) : null;
    const emptyCards = (
      <div className="row">
        <div className="col text-center">
          <h1 className="display-6">No cards loaded.</h1>
        </div>
      </div>
    );
    return (
      <div>
        {this.props.cards && this.props.cards.length
          ? this.props.cards[this.props.page].map((card, key) => {
              return (
                <div className="row" style={{ margin: "5px" }}>
                  <div className="col">
                    <div className="row">
                      <Card
                        key={key}
                        // className="col"
                        card={card}
                        addFilter={this.props.addFilter}
                        removeFilter={this.props.removeFilter}
                        filters={this.props.filters}
                      />
                    </div>
                    <div className="row text-right">
                      <SelectButton
                        className="col"
                        card={card}
                        // key={key}
                        // key={key}
                        addCardToSelection={this.props.addCardToSelection}
                      />
                      {this.props.show === "edition" &&
                      this.props.collectionId ? (
                        <AddButton
                          // className="col"
                          collectionId={this.props.collectionId}
                          collectionName={this.props.collectionName}
                          card={card}
                          // key={key}
                          addCardToCollection={this.props.addCardToCollection}
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })
          : emptyCards}
      </div>
    );
  }
}
export default ResultsBodyDisplay;
