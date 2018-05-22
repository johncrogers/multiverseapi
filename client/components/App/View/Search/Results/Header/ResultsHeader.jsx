import React from "react";
import ResultsToggler from "./../Options/ResultsToggler.jsx";
import ResultsBodyPageSelector from "./../Options/ResultsBodyPageSelector.jsx";
import ResultsPerPage from "./../Options/ResultsPerPage.jsx";
class ResultsHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // let headerStyle = {
    //   "background-image": url("mtgicon.png");
    // "background-repeat": repeat-y;
    // }
    return (
      <div className="row">
        <div className="col">
          <div className="row alert-primary text-dark">
            <div className="col border border-dark">
              <br />
              <br />
              <br />
              <h1 style={{ margin: "0px" }}>
                {/* {this.props.show.toUpperCase()}:{"  "} */}
                {this.props.details
                  ? this.props.details.name
                  : `No ${this.props.show} selected.`}
              </h1>
              <br />
              <br />
              <br />
            </div>
          </div>
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
        </div>
      </div>
    );
  }
}
export default ResultsHeader;
