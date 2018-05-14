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
    // this.props.handleViewChange("Search", username);
  }
  render() {
    return (
      <div>
        <h2>
          {" "}
          Hey welcome back{this.state.username
            ? ", " + this.state.username + "!"
            : "!"}{" "}
        </h2>
        {/* <br /> */}
        <h3>Please sign in:</h3>
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
            this.props.authenticate(this.state.username, this.state.password);
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
