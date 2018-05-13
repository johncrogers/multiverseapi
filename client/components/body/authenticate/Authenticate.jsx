import React from "react";
import Login from "./login/Login.jsx";
import SignUp from "./signup/SignUp.jsx";

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
          />
        );
        break;
      case "signup":
        return (
          <SignUp
            back={this.back}
            handleViewChange={this.props.handleViewChange}
          />
        );
        break;
      default:
        return (
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
        );
    }
  }
}
export default Authenticate;
