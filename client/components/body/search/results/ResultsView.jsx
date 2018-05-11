import React from "react";
import ResultsViewHeader from "./header/ResultsViewHeader.jsx";
import ResultsViewBody from "./body/ResultsViewBody.jsx";
class ResultsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ResultsViewHeader
          viewDetails={this.props.viewDetails}
          selectView={this.props.selectView}
        />
        <ResultsViewBody
          viewCards={this.props.viewCards}
          setCurrentView={this.props.setCurrentView}
          currentView={this.props.currentView}
          cardsPerPage={this.props.cardsPerPage}
        />
      </div>
    );
  }
}
export default ResultsView;
