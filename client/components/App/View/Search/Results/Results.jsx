import React from "react";
import ResultsHeader from "./Header/ResultsHeader.jsx";
import ResultsBody from "./Body/ResultsBody.jsx";
import ResultsFooter from "./Footer/ResultsFooter.jsx";
import Options from "./Options/Options.jsx";
class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const emptyCards = (
      <div className="row">
        <div className="col text-center">No cards loaded.</div>
      </div>
    );
    return (
      <span className="col-6">
        <ResultsHeader
          changeView={this.props.changeView}
          details={this.props.view.details}
          show={this.props.show}
          page={this.props.page}
          viewPreviousResults={this.props.viewPreviousResults}
          viewNextResults={this.props.viewNextResults}
          changeResultsPerPage={this.props.changeResultsPerPage}
        />
        <Options
          changeView={this.props.changeView}
          details={this.props.view.details}
          show={this.props.show}
          page={this.props.page}
          viewPreviousResults={this.props.viewPreviousResults}
          viewNextResults={this.props.viewNextResults}
          changeResultsPerPage={this.props.changeResultsPerPage}
        />
        <ResultsBody
          collectionId={this.props.collectionId}
          collectionName={this.props.collectionName}
          show={this.props.show}
          cards={this.props.view.results}
          page={this.props.page}
          viewPreviousResults={this.props.viewPreviousResults}
          viewNextResults={this.props.viewNextResults}
          addFilter={this.props.addFilter}
          removeFilter={this.props.removeFilter}
          filters={this.props.filters}
          addCardToSelection={this.props.addCardToSelection}
          addCardToCollection={this.props.addCardToCollection}
        />
        <Options
          changeView={this.props.changeView}
          details={this.props.view.details}
          show={this.props.show}
          page={this.props.page}
          viewPreviousResults={this.props.viewPreviousResults}
          viewNextResults={this.props.viewNextResults}
          changeResultsPerPage={this.props.changeResultsPerPage}
        />
      </span>
    );
  }
}
export default Results;
