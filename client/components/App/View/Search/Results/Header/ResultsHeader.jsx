import React from "react";
import ResultsToggler from "./ResultsToggler.jsx";
import ResultsBodyPageSelector from "./../Body/ResultsBodyPageSelector.jsx";
class ResultsHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <h4>RESULTS:</h4>
            </div>
          </div>
          <div className="row">
            <div className="col text-middle">
              <h5>
                {this.props.show.toUpperCase()}:{"  "}
                {this.props.details
                  ? this.props.details.name
                  : `No ${this.props.show} selected.`}
              </h5>
            </div>
          </div>
          <div className="row">
            <ResultsToggler changeView={this.props.changeView} />
            {"    "}
            {/* <div className="col"> */}
            <ResultsBodyPageSelector
              viewPreviousResults={this.props.viewPreviousResults}
              viewNextResults={this.props.viewNextResults}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ResultsHeader;
