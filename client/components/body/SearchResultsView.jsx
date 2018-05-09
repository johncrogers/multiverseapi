import React from "react";
import FormatSelectorView from "./search/formats/FormatSelectorView.jsx";
import ResultsView from "./search/results/ResultsView.jsx";
import FiltersView from "./search/filters/FiltersView.jsx";
import SelectionView from "./search/selection/SelectionView.jsx";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterResults: this.props.searchResults
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <FormatSelectorView
          modifySearchResults={this.props.modifySearchResults}
        />
        <ResultsView />
        <FiltersView />
        <SelectionView />
      </div>
    );
  }
}

export default Body;
