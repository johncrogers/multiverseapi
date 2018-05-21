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
    return (
      <div>
        {this.props.cards
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
                  <div className="row">
                    <SelectButton
                      className="col"
                      card={card}
                      // key={key}
                      addCardToSelection={this.props.addCardToSelection}
                    />
                    {this.props.collectionId ? (
                      <AddButton
                        // className="col"
                        collectionId={this.props.collectionId}
                        collectionName={this.props.collectionName}
                        card={card}
                        addCardToCollection={this.props.addCardToCollection}
                      />
                    ) : null}
                  </div>
                </div>
              );
            })
          : "No cards loaded."}
      </div>
    );
  }
}
export default ResultsBodyDisplay;
