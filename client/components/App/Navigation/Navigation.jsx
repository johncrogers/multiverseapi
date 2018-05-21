import React from "react";
import Logout from "./Logout/Logout.jsx";
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const logo = <img src="/images/logo.png" alt="" width="50" height="50" />;
    const username = this.props.username;
    const search = (
      <a
        href="#"
        onClick={() => {
          this.props.changeView("Search");
        }}
      >
        Search
      </a>
    );
    const collect = (
      <a
        href="#"
        onClick={() => {
          this.props.changeView("Collect");
        }}
      >
        Collect
      </a>
    );
    const logout = username ? <Logout logout={this.props.logout} /> : null;
    return (
      <div className="row">
        <div className="col-10">
          <span>{logo}</span>
        </div>
        <div className="col-2" style={{ align: "middle" }}>
          <span>{this.props.username}</span>&nbsp;
          <span>{search}</span>&nbsp;
          <span>{collect}</span>&nbsp;
          <span>{logout}</span>
        </div>
      </div>
    );
  }
}
export default Navigation;
