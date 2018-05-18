import React from "react";
class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <a
        href="#"
        onClick={() => {
          this.props.logout();
        }}
      >
        Log Out
      </a>
    );
  }
}
export default Logout;
