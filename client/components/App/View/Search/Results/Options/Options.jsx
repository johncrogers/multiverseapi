import React from "react";
import ResultsToggler from "./ResultsToggler.jsx";
import ResultsBodyPageSelector from "./ResultsBodyPageSelector.jsx";
import ResultsPerPage from "./ResultsPerPage.jsx";
class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(`Render Options`, this.props);
    return (
      <div className="row">
        <div className="col">
          <hr style={{ margin: "3px" }} />
          <div className="row">
            <ResultsToggler changeView={this.props.changeView} />
            <ResultsPerPage
              changeResultsPerPage={this.props.changeResultsPerPage}
            />
            <ResultsBodyPageSelector
              viewPreviousResults={this.props.viewPreviousResults}
              viewNextResults={this.props.viewNextResults}
            />
          </div>
          <hr style={{ margin: "3px" }} />
        </div>
      </div>
    );
  }
}
export default Options;
