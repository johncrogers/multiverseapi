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
          No cards loaded.<hr />
        </div>
      </div>
    );
    return (
      <div>
        <hr />
        {this.props.cards && this.props.cards.length
          ? this.props.cards[this.props.page].map((card, key) => {
              return (
                <div>
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
                  <hr />
                </div>
              );
            })
          : emptyCards}
      </div>
    );
  }
}
export default ResultsBodyDisplay;
