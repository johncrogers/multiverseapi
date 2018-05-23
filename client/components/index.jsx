import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Landing from "./Landing/Landing.jsx";
import App from "./App/App.jsx";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "Authenticate",
      username: "",
      userId: ""
    };
    /*
     - show:
      - Authenticate
      - App
    */
    this.handleViewChange = this.handleViewChange.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.createUser = this.createUser.bind(this);
    this.logout = this.logout.bind(this);
  }
  handleViewChange(view) {
    // console.log(`handleViewChange`);
    this.setState({ show: view }, () => {
      // console.log(`state @ handleViewChange`, this.state);
    });
  }
  authenticate(username, password) {
    // console.log(`authenticate`);
    axios
      .post("/api/users", {
        username: username,
        password: password
      })
      .then(res => {
        // console.log("Response in authenticate:", res);
        if (res.data.length) {
          this.setState(
            {
              username: username,
              userId: res.data[0].id
            },
            () => {
              this.handleViewChange("App");
            }
          );
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
  createUser(username, password) {
    // console.log(`createUser`);
    axios
      .post("/users", {
        username: username,
        password: password
      })
      .then(res => {
        // console.log(res);
        if (typeof res.data === "string" && res.data.length) {
          this.setState({
            error: res.data
          });
        } else {
          this.authenticate(username, password);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
  logout() {
    // console.log(`logout`);
    this.setState({
      username: "",
      userId: "",
      show: "Landing"
    });
  }
  render() {
    // console.log(`Render Index`);
    switch (this.state.show) {
      case "Landing":
        return (
          <Landing
            authenticate={this.authenticate}
            handleViewChange={this.handleViewChange}
            createUser={this.createUser}
          />
        );
        break;
      case "App":
        return (
          <App
            username={this.state.username}
            logout={this.logout}
            userId={this.state.userId}
          />
        );
        break;
      default:
        return (
          <Landing
            authenticate={this.authenticate}
            handleViewChange={this.handleViewChange}
            createUser={this.createUser}
          />
        );
        break;
    }
  }
}
ReactDOM.render(<Index />, document.getElementById("app"));
