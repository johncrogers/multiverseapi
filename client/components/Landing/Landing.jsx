import React from "react";
import Messages from "./Messages/Messages.jsx";
import Authenticate from "./Authenticate/Authenticate.jsx";
// import Logo from "./../Logo.jsx";
// import Login from "./Login/Login.jsx";
// import SignUp from "./Signup/SignUp.jsx";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "Messages",
      auth: "Login",
      message: "Home"
    };
    // this.showAuthenticate = this.showAuthenticate.bind(this);
    // this.showMessages = this.showMessages.bind(this);
  }
  // back() {
  //   this.setState({ show: "choices" });
  // }
  // showAuthenticate() {
  //   this.setState({ show: "Authenticate" });
  // }
  // showMessages() {
  //   this.setState({ show: "Messages" });
  // }
  render() {
    // switch (this.state.show) {
    //   case "login":
    //     return (
    //       <Login
    //         back={this.back}
    //         handleViewChange={this.props.handleViewChange}
    //         authenticate={this.props.authenticate}
    //       />
    //     );
    //     break;
    //   case "signup":
    //     return (
    //       <SignUp
    //         back={this.back}
    //         handleViewChange={this.props.handleViewChange}
    //         createUser={this.props.createUser}
    //         error={this.props.error}
    //       />
    //     );
    //     break;
    //   default:
    //     );
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
        className="container-fluid"
        // style=" height: 100%"
      >
        <div className="row bg-dark text-light text-center h-100">
          <div className="col">{logo}</div>
        </div>
        <div className="row bg-dark text-light text-center h-100">
          <div className="col">
            <br />
            <button
              className="btn btn-sm btn-primary border border-light"
              onClick={() => {
                this.setState({ show: "Authenticate", auth: "Login" }, () => {
                  // console.log(`Login`, this.state);
                });
              }}
            >
              Log in
            </button>&nbsp;|&nbsp;
            <button
              className="btn btn-sm btn-success border border-light"
              onClick={() => {
                this.setState({ show: "Authenticate", auth: "Signup" }, () => {
                  // console.log(`Signup`, this.state);
                });
              }}
            >
              Sign up
            </button>
            <br />
            <br />
          </div>
        </div>
        <div className="row bg-secondary">
          <div className="col text-center">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  this.setState(
                    { show: "Messages", message: "Contribute", auth: "" },
                    () => {
                      // console.log(`click Contribute`, this.state);
                    }
                  );
                }}
              >
                Contribute
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  this.setState(
                    { show: "Messages", message: "Home", auth: "" },
                    () => {
                      // console.log(`click Home`, this.state);
                    }
                  );
                }}
              >
                Home
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  this.setState(
                    { show: "Messages", message: "Contact", auth: "" },
                    () => {
                      // console.log(`click Contact`, this.state);
                    }
                  );
                }}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        <div className="row text-center h-100">
          <div className="col">
            {this.state.show === "Messages" ? (
              <Messages message={this.state.message} />
            ) : null}
            {this.state.show === "Authenticate" ? (
              <Authenticate
                show={this.state.auth}
                authenticate={this.props.authenticate}
                handleViewChange={this.props.handleViewChange}
                createUser={this.props.createUser}
              />
            ) : null}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="container text-secondary">
              <small>
                The literal and graphical information presented on this site
                about Magic: The Gathering, including card images, the mana
                symbols, and Oracle text, is copyright Wizards of the Coast,
                LLC, a subsidiary of Hasbro, Inc. This website is not produced
                by, endorsed by, supported by, or affiliated with Wizards of the
                Coast.
              </small>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
    // }
  }
}
export default Landing;
