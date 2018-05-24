import React from "react";
class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button
        className="btn btn-danger btn-sm border border-light"
        onClick={() => {
          this.props.logout();
        }}
      >
        Log Out
      </button>
    );
  }
}
export default Logout;
