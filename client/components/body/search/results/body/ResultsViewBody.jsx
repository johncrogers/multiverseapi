import React from "react";
import ResultsViewBodyPageSelector from "./ResultsViewBodyPageSelector.jsx";
import ResultsViewBodyDisplay from "./ResultsViewBodyDisplay.jsx";
class ResultsViewBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.viewCards.length ? this.setCurrentView(1) : false;
  }
  render() {
    return (
      <div>
        <ResultsViewBodyPageSelector
          setCurrentView={this.props.setCurrentView}
          handlePageChangeClick={this.props.handlePageChangeClick}
        />
        <ResultsViewBodyDisplay
          currentView={this.props.currentView}
          addCardToSelection={this.props.addCardToSelection}
        />
        <ResultsViewBodyPageSelector
          setCurrentView={this.props.setCurrentView}
          handlePageChangeClick={this.props.handlePageChangeClick}
        />
      </div>
    );
  }
}
export default ResultsViewBody;
