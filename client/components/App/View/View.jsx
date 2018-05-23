import React from "react";
import Search from "./Search/Search.jsx";
import Collect from "./Collect/Collect.jsx";
class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(`Render View`);
    switch (this.props.show) {
      case "Search":
        return (
          <Search username={this.props.username} userId={this.props.userId} />
        );
        break;
      case "Collect":
        return (
          <Collect username={this.props.username} userId={this.props.userId} />
        );
        break;
      // case "Build":
      //   return (<Build username={this.props.username} userId={this.props.userId}/>);
      //   break;
      default:
        return (
          <Search username={this.props.username} userId={this.props.userId} />
        );
        break;
    }
  }
}
export default View;
