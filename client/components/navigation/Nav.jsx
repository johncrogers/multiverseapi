import React from "react";
import Logout from "./Logout.jsx";
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const username = this.props.username;
    const button = username ? <Logout logout={this.props.logout} /> : <span />;
    return (
      <div>
        <span>
          <img src="/images/logo.png" alt="" width="50" height="50" />
          {button}
        </span>
      </div>
    );
  }
}
export default Nav;
