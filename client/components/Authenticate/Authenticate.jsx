import React from "react";
import Logo from "./../Logo.jsx";
import Login from "./Login/Login.jsx";
import SignUp from "./SignUp/SignUp.jsx";

class Authenticate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "choices"
    };
    this.back = this.back.bind(this);
  }
  back() {
    this.setState({ show: "choices" });
  }
  render() {
    switch (this.state.show) {
      case "login":
        return (
          <Login
            back={this.back}
            handleViewChange={this.props.handleViewChange}
            authenticate={this.props.authenticate}
          />
        );
        break;
      case "signup":
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
          <div>
            <Logo />
            <div>
              <a
                href="#"
                onClick={() => {
                  this.setState({ show: "login" });
                }}
              >
                Login
              </a>&nbsp;| |&nbsp;{" "}
              <a
                href="#"
                onClick={() => {
                  this.setState({ show: "signup" });
                }}
              >
                Sign Up
              </a>
            </div>
          </div>
        );
    }
  }
}
export default Authenticate;
