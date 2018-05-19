import React from "react";
import ResultsBodyPageSelector from "./ResultsBodyPageSelector.jsx";
import ResultsBodyDisplay from "./ResultsBodyDisplay.jsx";
class ResultsBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <h3>Navigate:</h3>
          <ResultsBodyPageSelector
            viewPreviousResults={this.props.viewPreviousResults}
            viewNextResults={this.props.viewNextResults}
          />
        </div>
        <h3>Cards:</h3>
        <ResultsBodyDisplay
          collectionId={this.props.collectionId}
          collectionName={this.props.collectionName}
          show={this.props.show}
          cards={this.props.cards}
          page={this.props.page}
          removeFilter={this.props.removeFilter}
          addFilter={this.props.addFilter}
          filters={this.props.filters}
          addCardToSelection={this.props.addCardToSelection}
          addCardToCollection={this.props.addCardToCollection}
        />
        <div>
          <h3>Navigate:</h3>
          <ResultsBodyPageSelector
            viewPreviousResults={this.props.viewPreviousResults}
            viewNextResults={this.props.viewNextResults}
          />
        </div>
      </div>
    );
  }
}
export default ResultsBody;
