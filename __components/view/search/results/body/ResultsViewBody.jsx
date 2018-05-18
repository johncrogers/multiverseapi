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
        <div>
          <h3>Navigate:</h3>
          <ResultsViewBodyPageSelector
            setCurrentView={this.props.setCurrentView}
            handlePageChangeClick={this.props.handlePageChangeClick}
          />
        </div>
        <h3>Cards:</h3>
        <ResultsViewBodyDisplay
          currentView={this.props.currentView}
          addCardToSelection={this.props.addCardToSelection}
          filters={this.props.filters}
          addFilter={this.props.addFilter}
          removeFilter={this.props.removeFilter}
        />
        <div>
          <h3>Navigate:</h3>
          <ResultsViewBodyPageSelector
            setCurrentView={this.props.setCurrentView}
            handlePageChangeClick={this.props.handlePageChangeClick}
          />
        </div>
      </div>
    );
  }
}
export default ResultsViewBody;
