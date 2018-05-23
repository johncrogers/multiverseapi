import React from "react";
// import Logo from "./../../Logo.jsx";
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
      <div className="container">
        <h1 className="display-4">Sign up:</h1>
        <hr />
        {this.props.error ? <h5>{this.props.error}</h5> : ""}
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
          className="btn btn-sm btn-success border border-dark"
          onClick={() => {
            this.props.createUser(this.state.username, this.state.password);
          }}
        >
          Sign up
        </button>
        <hr />
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
