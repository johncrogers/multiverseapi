import React from "react";
class ResultsViewBodyDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.currentView.length
          ? this.props.currentView.map(card => {
              return <span>{card.name}</span>;
            })
          : "No cards loaded."}
        {/* Card */}
      </div>
    );
  }
}
export default ResultsViewBodyDisplay;
