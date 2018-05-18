import React from "react";
import ResultsToggler from "./ResultsToggler.jsx";
// import ResultsViewSorter from "./ResultsViewSorter.jsx";
// import ResultsViewHeaderHider from "./ResultsViewHeaderHider.jsx";
class ResultsHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <h2>
            {this.props.show.toUpperCase()}:&nbsp;{this.props.details
              ? this.props.details.name
              : `No ${this.props.show} selected.`}
          </h2>
        </div>
        <ResultsToggler changeView={this.props.changeView} />
        {/* <ResultsViewSorter /> */}
        {/* <ResultsViewHeaderHider /> */}
      </div>
    );
  }
}
export default ResultsHeader;
