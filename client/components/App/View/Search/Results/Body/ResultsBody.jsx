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
      <div className="row">
        <div className="col">
          {/* <div>
          <h7>Navigate:</h7>
          <ResultsBodyPageSelector
            viewPreviousResults={this.props.viewPreviousResults}
            viewNextResults={this.props.viewNextResults}
          />
        </div> */}
          {/* <h7>Cards:</h7> */}
          <div className="row">
            <div className="col">
              <ResultsBodyDisplay
                className="row"
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
            </div>
          </div>
          {/* <div className="row">
            <div className="col">
              <ResultsBodyPageSelector
                viewPreviousResults={this.props.viewPreviousResults}
                viewNextResults={this.props.viewNextResults}
              />
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
export default ResultsBody;
