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
                  <Card
                    key={key}
                    card={card}
                    addFilter={this.props.addFilter}
                    removeFilter={this.props.removeFilter}
                    filters={this.props.filters}
                  />
                  <SelectButton
                    card={card}
                    addCardToSelection={this.props.addCardToSelection}
                  />
                  {this.props.collectionId ? (
                    <AddButton
                      collectionId={this.props.collectionId}
                      collectionName={this.props.collectionName}
                      card={card}
                      addCardToCollection={this.props.addCardToCollection}
                    />
                  ) : (
                    ""
                  )}
                  <br />
                  <br />
                </div>
              );
            })
          : "No cards loaded."}
      </div>
    );
  }
}
export default ResultsBodyDisplay;
