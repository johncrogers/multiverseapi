import React from "react";
import Logout from "./Logout/Logout.jsx";
class Navigation extends React.Component {
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
          <img src="/images/logo.png" alt="" width="50" height="50" />{" "}
          {this.props.username}
          <a
            href="#"
            onClick={() => {
              this.props.changeView("Search");
            }}
          >
            Search
          </a>
          <a
            href="#"
            onClick={() => {
              this.props.changeView("Collect");
            }}
          >
            Collect
          </a>
          {/* <a
            href="#"
            onClick={() => {
              this.props.changeView("Search");
            }}
          >
            Search
          </a> */}
          {button}
        </span>
      </div>
    );
  }
}
export default Navigation;
