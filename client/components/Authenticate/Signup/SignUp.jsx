import React from "react";
import Logo from "./../../Logo.jsx";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  render() {
    return (
      <div>
        <Logo />
        <h4>Please create an account:</h4>
        {this.props.error ? <h5>{this.props.error}</h5> : ""}
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
            this.props.createUser(this.state.username, this.state.password);
          }}
        >
          Join
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
export default SignUp;
