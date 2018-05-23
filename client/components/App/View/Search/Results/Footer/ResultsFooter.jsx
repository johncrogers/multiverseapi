import React from "react";
import ResultsToggler from "./../Options/ResultsToggler.jsx";
import ResultsBodyPageSelector from "./../Options/ResultsBodyPageSelector.jsx";
import ResultsPerPage from "./../Options/ResultsPerPage.jsx";
class ResultsFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(`Render ResultsFooter`);
    return (
      <div className="row border border-dark alert-secondary">
        <ResultsToggler changeView={this.props.changeView} />
        <ResultsPerPage
          changeResultsPerPage={this.props.changeResultsPerPage}
        />
        <ResultsBodyPageSelector
          viewPreviousResults={this.props.viewPreviousResults}
          viewNextResults={this.props.viewNextResults}
        />
      </div>
    );
  }
}
export default ResultsFooter;
