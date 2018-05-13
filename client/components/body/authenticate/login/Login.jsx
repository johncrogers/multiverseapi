import React from "react";
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
    this.props.handleViewChange("Search", username);
  }
  render() {
    return (
      <div>
        Hey welcome back{this.state.username
          ? ", " + this.state.username + "!"
          : "!"}{" "}
        <br />
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          onChange={e => {
            this.setState({ username: e.target.value });
          }}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={e => {
            this.setState({ password: e.target.value });
          }}
        />
        <br />
        <button
          onClick={() => {
            this.authenticate(this.state.username, this.state.password);
          }}
        >
          Let's Go!
        </button>
        <br />
        <a
          href="#"
          onClick={() => {
            this.props.back();
          }}
        >
          Ooops! Take me back!
        </a>
      </div>
    );
  }
}
export default Login;
