import React from "react";
import ResultsHeader from "./Header/ResultsHeader.jsx";
import ResultsBody from "./Body/ResultsBody.jsx";
class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <span className="col-6">
        <ResultsHeader
          changeView={this.props.changeView}
          details={this.props.view.details}
          show={this.props.show}
          page={this.props.page}
          viewPreviousResults={this.props.viewPreviousResults}
          viewNextResults={this.props.viewNextResults}
        />
        {/* <br /> */}
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
      </span>
    );
  }
}
export default Results;
