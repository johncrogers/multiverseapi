// This is the api management index.
import React from "react";
import ReactDOM from "react-dom";
import Nav from "./navigation/Nav.jsx";
import SearchResultsView from "./body/SearchResultsView.jsx";
import Login from "./body/Login.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    this.authenticate = this.authenticate.bind(this);
    this.logout = this.logout.bind(this);
  }
  authenticate() {
    this.setState({ username: "John" });
  }
  logout() {
    this.setState({ username: "" });
  }
  componentDidMount() {}
  render() {
    return (
      <div id="app">
        <Nav logout={this.logout} />
        {this.state.username ? (
          <SearchResultsView />
        ) : (
          <Login
            authenticate={this.authenticate}
            username={this.state.username}
          />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
