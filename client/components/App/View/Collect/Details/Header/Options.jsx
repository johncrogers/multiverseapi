import React from "react";
import Save from "./Save.jsx";
import Delete from "./Delete.jsx";
class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render Options`);
    return (
      <div>
        <Delete
          details={this.props.details}
          removeCollection={this.props.removeCollection}
        />
        <Save
          details={this.props.details}
          updateCollection={this.props.updateCollection}
        />
      </div>
    );
  }
}
export default Options;
