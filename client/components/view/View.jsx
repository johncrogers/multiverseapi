import React from "react";
import Authenticate from "./authenticate/Authenticate.jsx";
import Search from "./search/Search.jsx";
class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    switch (this.props.view) {
      case "Search":
        return (
          <Search
            handleViewChange={this.props.handleViewChange}
            username={this.props.username}
            userId={this.props.userId}
          />
        );
        break;

      default:
        return (
          <Authenticate
            handleViewChange={this.props.handleViewChange}
            authenticate={this.props.authenticate}
            createUser={this.props.createUser}
            error={this.props.error}
            username={this.props.username}
          />
        );
        break;
    }
  }
}
export default View;
