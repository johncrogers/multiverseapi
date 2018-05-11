import React from "react";
import Card from "./Card.jsx";
class ResultsViewBodyDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.currentView.length
          ? this.props.currentView.map((card, key) => {
              return (
                <Card
                  key={key}
                  card={card}
                  addCardToSelection={this.props.addCardToSelection}
                />
              );
            })
          : "No cards loaded."}
        {/* Card */}
      </div>
    );
  }
}
export default ResultsViewBodyDisplay;
