import React from "react";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }
  handleFormSubmission(username) {
    this.props.handleViewChange("Search", username);
  }
  render() {
    return (
      <div>
        Welcome to the Multiverse{this.state.username
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
        <input type="password" name="password" />
        <br />
        <button
          onClick={() => {
            this.handleFormSubmission("John");
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
