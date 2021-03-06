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
      <span>
        <ResultsViewHeader
          viewDetails={this.props.viewDetails}
          selectView={this.props.selectView}
          view={this.props.view}
        />
        <br />
        <ResultsViewBody
          viewCards={this.props.viewCards}
          setCurrentView={this.props.setCurrentView}
          currentView={this.props.currentView}
          cardsPerPage={this.props.cardsPerPage}
          handlePageChangeClick={this.props.handlePageChangeClick}
          addCardToSelection={this.props.addCardToSelection}
          filters={this.props.filters}
          addFilter={this.props.addFilter}
          removeFilter={this.props.removeFilter}
        />
      </span>
    );
  }
}
export default ResultsView;
