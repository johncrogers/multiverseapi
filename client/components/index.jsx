// This is the api management index.
import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Nav from "./navigation/Nav.jsx";
import SearchResultsView from "./body/SearchResultsView.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div id="app">
        <Nav />
        <SearchResultsView />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
