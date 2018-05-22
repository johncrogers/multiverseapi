import React from "react";
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
          <hr />
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
    );
  }
}
export default ResultsBody;
