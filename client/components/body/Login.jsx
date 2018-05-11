import React from "react";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <a
          href="#"
          onClick={() => {
            this.props.authenticate();
          }}
        >
          Login
        </a>{" "}
        {/* || <a href="#">Sign Up</a> */}
      </div>
    );
  }
}
export default Login;
