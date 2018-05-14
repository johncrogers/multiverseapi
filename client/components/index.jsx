// This is the api management index.
import React from "react";
import ReactDOM from "react-dom";
import Nav from "./navigation/Nav.jsx";
import View from "./view/View.jsx";
import axios from "axios";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      view: "authenticate"
    };
    this.authenticate = this.authenticate.bind(this);
    this.createUser = this.createUser.bind(this);
    this.logout = this.logout.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
  }
  authenticate(username, password) {
    axios
      .post("/api/users", { username: username, password: password })
      .then(res => {
        console.log(res);
        if (res.data.length) {
          this.setState({ username: username }, () => {
            this.handleViewChange("Search");
          });
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
  createUser(username, password) {
    axios
      .post("/users", { username: username, password: password })
      .then(res => {
        this.setState({ username: username }, () => {
          this.handleViewChange("Search");
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
  setUsername(username) {
    this.setState({ username: username });
  }
  logout() {
    this.setState({ username: "", view: "authenticate" });
  }
  handleViewChange(view) {
    this.setState({ view: view });
  }
  componentDidMount() {}
  render() {
    return (
      <div id="app">
        <Nav
          logout={this.logout}
          username={this.state.username}
          // handleViewChange={this.handleViewChange}
        />
        <View
          setUsername={this.setUsername}
          authenticate={this.authenticate}
          createUser={this.createUser}
          // handleViewChange={this.handleViewChange}
          view={this.state.view}
          username={this.state.username}
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
