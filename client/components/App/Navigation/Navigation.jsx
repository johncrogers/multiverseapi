import React from "react";
import Logout from "./Logout/Logout.jsx";
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const logo = (
      <img
        className="align-self-center align-middle"
        style={{ marginTop: "10px" }}
        src="/images/logo.png"
        alt=""
        width="150"
        height="150"
      />
    );
    const username = this.props.username;
    const search = (
      <button
        className="btn btn-primary btn-sm border border-light"
        onClick={() => {
          this.props.changeView("Search");
        }}
      >
        Search
      </button>
    );
    const collect = (
      <button
        className="btn btn-success btn-sm border border-light"
        onClick={() => {
          this.props.changeView("Collect");
        }}
      >
        Collect
      </button>
    );
    const logout = username ? <Logout logout={this.props.logout} /> : null;
    return (
      <div
        className="row bg-dark  border border-dark"
        style={{ height: "170px" }}
      >
        <div className="col-8 align-middle">
          <span className="media  align-middle">
            <span className="media-body align-self-center">{logo}</span>
          </span>
        </div>
        <div className="col-4 text-right">
          <span className=" text-light">
            Welcome back, {this.props.username}!
          </span>&nbsp;&nbsp;&nbsp;
          <span className="">{search}</span>
          <span className="text-light">&nbsp;|&nbsp;</span>
          <span className="">{collect}</span>
          <span className="text-light">&nbsp;|&nbsp;</span>
          <span className="">{logout}</span>
        </div>
      </div>
    );
  }
}
export default Navigation;
