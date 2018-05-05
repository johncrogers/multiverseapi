import React from "react";
import FormatSelectorView from "./formats/FormatSelectorView.jsx";
import ResultsView from "./results/ResultsView.jsx";
import FiltersView from "./filters/FiltersView.jsx";
import SelectionView from "./selection/SelectionView.jsx";

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
