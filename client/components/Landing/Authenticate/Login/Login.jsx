import React from "react";
// import Logo from "./../../Logo.jsx";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleLogin(username, password) {
    this.props.authenticate(username, password);
    // this.props.handleViewChange("Search", username);
  }
  render() {
    return (
      <div className="container">
        <h1 className="display-4">Log in:</h1>
        <hr />
        <label htmlFor="username">Username:&nbsp;</label>
        <input
          type="text"
          name="username"
          className="border border-dark"
          onChange={e => {
            this.setState({ username: e.target.value });
          }}
        />
        <br />
        <label htmlFor="password">Password:&nbsp;</label>
        <input
          type="password"
          name="password"
          className="border border-dark"
          onChange={e => {
            this.setState({ password: e.target.value });
          }}
        />
        <br />
        <button
          className="btn btn-sm btn-primary border border-dark"
          onClick={() => {
            this.props.authenticate(this.state.username, this.state.password);
          }}
        >
          Log in
        </button>
        <hr />
        {/* <a
          className="display-10"
          href="#"
          onClick={() => {
            this.props.back();
          }}
        >
          Ooops! Take me back!
        </a> */}
      </div>
    );
  }
}
export default Login;
