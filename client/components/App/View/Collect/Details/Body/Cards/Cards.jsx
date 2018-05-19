import React from "react";
import Card from "./../../../../Search/Results/Body/Card.jsx";
class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render Cards`);
    return (
      <div>
        {this.props.cards
          ? this.props.cards.map((card, key) => {
              return (
                <div>
                  <Card
                    key={key}
                    card={card}
                    addFilter={this.props.addFilter}
                    removeFilter={this.props.removeFilter}
                    filters={this.props.filters}
                  />
                  <button
                    onClick={() => {
                      this.props.removeCard(card.id, card.collection_id);
                    }}
                  >
                    Remove Card
                  </button>
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
export default Cards;
