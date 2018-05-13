import React from "react";
import Authenticate from "./body/Authenticate.jsx";
import Search from "./body/Search.jsx";
class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    switch (this.props.view) {
      case "Search":
        return <Search handleViewChange={this.props.handleViewChange} />;
        break;

      default:
        return <Authenticate handleViewChange={this.props.handleViewChange} />;
        break;
    }
  }
}
export default View;
