import React from "react";
import Logout from "./Logout.jsx";
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <span>
          <img src="/images/logo.png" alt="" width="50" height="50" />
          {this.props.username ? <Logout logout={this.props.logout} /> : null}
        </span>
      </div>
    );
  }
}
export default Nav;
