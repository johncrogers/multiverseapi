import React from "react";
import ResultsViewToggler from "./ResultsViewToggler.jsx";
import ResultsViewSorter from "./ResultsViewSorter.jsx";
import ResultsViewHeaderHider from "./ResultsViewHeaderHider.jsx";
class ResultsViewHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <h2>
            {this.props.view.toUpperCase()}:&nbsp;{this.props.viewDetails.name
              ? this.props.viewDetails.name
              : `No ${this.props.view} selected.`}
          </h2>
          {/* <h3>{this.props.viewDetails.releaseDate}</h3> */}
        </div>
        <ResultsViewToggler selectView={this.props.selectView} />
        {/* <ResultsViewSorter /> */}
        {/* <ResultsViewHeaderHider /> */}
      </div>
    );
  }
}
export default ResultsViewHeader;
