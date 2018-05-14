import React from "react";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleSignUp(username) {
    this.props.handleViewChange("Search", username);
  }
  render() {
    return (
      <div>
        <h2>
          {" "}
          Welcome to the Multiverse{this.state.username
            ? ", " + this.state.username + "!"
            : "!"}{" "}
        </h2>
        {/* <br /> */}
        <h3>Please create an account:</h3>
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
