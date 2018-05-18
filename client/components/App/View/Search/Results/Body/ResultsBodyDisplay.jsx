import React from "react";
import Card from "./Card.jsx";
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
                <Card
                  key={key}
                  card={card}
                  addFilter={this.props.addFilter}
                  removeFilter={this.props.removeFilter}
                  filters={this.props.filters}
                  addCardToSelection={this.props.addCardToSelection}
                />
              );
            })
          : "No cards loaded."}
      </div>
    );
  }
}
export default ResultsBodyDisplay;
