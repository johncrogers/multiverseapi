import React from "react";
import ResultsViewHeader from "./ResultsViewHeader.jsx";
import ResultsViewBody from "./ResultsViewBody.jsx";
class ResultsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ResultsViewHeader
          viewDetails={this.props.viewDetails}
          selectView={this.props.selectView}
        />
        <ResultsViewBody viewCards={this.props.viewCards} />
      </div>
    );
  }
}
export default ResultsView;
