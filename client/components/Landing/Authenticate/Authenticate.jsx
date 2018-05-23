import React from "react";
import Login from "./Login/Login.jsx";
import SignUp from "./Signup/SignUp.jsx";
class Authenticate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(`Render Authenticate`, this.props);
    switch (this.props.show) {
      case "Login":
        return (
          <Login
            back={this.back}
            handleViewChange={this.props.handleViewChange}
            authenticate={this.props.authenticate}
          />
        );
        break;
      case "Signup":
        return (
          <SignUp
            back={this.back}
            handleViewChange={this.props.handleViewChange}
            createUser={this.props.createUser}
            error={this.props.error}
          />
        );
        break;
      default:
        return (
          <Login
            back={this.back}
            handleViewChange={this.props.handleViewChange}
            authenticate={this.props.authenticate}
          />
        );
    }
  }
}
export default Authenticate;
