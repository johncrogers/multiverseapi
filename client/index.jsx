// This is the api management index.
import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Nav from "./components/navigation/Nav.jsx";
import Body from "./components/body/Body.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: [],
      searchResults: []
    };
    this.modifySearchResults.bind(this);
  }
  componentDidMount() {
    // $.ajax({
    //   url: "/api/editions/LEA/cards",
    //   success: data => {
    //     this.setState({
    //       searchData: data
    //     });
    //   },
    //   error: err => {
    //     console.log("err", err);
    //   }
    // });
  }
  modifySearchResults(data) {
    console.log("Called modifySearchResults.");
  }
  render() {
    return (
      <div id="app">
        <Nav />
        <Body
          searchResults={this.state.searchResults}
          modifySearchResults={this.modifySearchResults}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
