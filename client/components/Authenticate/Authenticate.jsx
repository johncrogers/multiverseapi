import React from "react";
import Logo from "./../Logo.jsx";
import Login from "./Login/Login.jsx";
import SignUp from "./Signup/SignUp.jsx";

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
        const logo = (
          <img
            className="align-self-center align-middle"
            style={{ marginTop: "10px" }}
            src="/images/logo.png"
            alt=""
            // width="150"
            // height="150"
          />
        );
        return (
          <div
            className="container-fluid bg-dark text-light text-center h-100"
            // style=" height: 100%"
          >
            <div className="row">
              <div className="col">{logo}</div>
            </div>
            <div className="row">
              <div className="col">
                <br />
                <button
                  className="btn btn-sm btn-primary border border-light"
                  onClick={() => {
                    this.setState({ show: "login" });
                  }}
                >
                  Login
                </button>&nbsp;|&nbsp;
                <button
                  className="btn btn-sm btn-secondary border border-light"
                  onClick={() => {
                    this.setState({ show: "signup" });
                  }}
                >
                  Sign Up
                </button>
                <br />
                <br />
              </div>
            </div>
          </div>
        );
    }
  }
}
export default Authenticate;
