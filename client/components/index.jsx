// This is the api management index.
import React from "react";
import ReactDOM from "react-dom";
import Nav from "./navigation/Nav.jsx";
import View from "./body/View.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      view: "authenticate"
    };
    // this.authenticate = this.authenticate.bind(this);
    this.logout = this.logout.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
  }
  setUsername(username) {
    this.setState({ username: username });
  }
  logout() {
    this.setState({ username: "", view: "authenticate" });
  }
  handleViewChange(view, username) {
    this.setState({ view: view }, () => {
      this.setUsername(username);
    });
  }
  componentDidMount() {}
  render() {
    return (
      <div id="app">
        <Nav
          logout={this.logout}
          username={this.state.username}
          handleViewChange={this.handleViewChange}
        />
        <View
          setUsername={this.setUsername}
          handleViewChange={this.handleViewChange}
          view={this.state.view}
        />
        {/* {this.state.username ? (
        //   <SearchResultsView />
        // ) : (
        //   <Authenticate
        //     authenticate={this.authenticate}
        //     username={this.state.username}
        //   />
        // )} */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
