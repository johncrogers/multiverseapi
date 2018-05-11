import React from "react";
import ResultsViewBodyPageSelector from "./ResultsViewBodyPageSelector.jsx";
import ResultsViewBodyDisplay from "./ResultsViewBodyDisplay.jsx";
class ResultsViewBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.viewCards.length ? this.setCurrentView(1) : false;
  }
  render() {
    return (
      <div>
        <ResultsViewBodyDisplay currentView={this.props.currentView} />
        <ResultsViewBodyPageSelector setCurrentView={this.setCurrentView} />
      </div>
    );
  }
}
export default ResultsViewBody;
