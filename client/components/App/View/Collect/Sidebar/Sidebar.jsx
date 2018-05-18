import React from "react";
import Selector from "./Selector.jsx";
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render Sidebar`);
    return (
      <div>
        <Selector />
      </div>
    );
  }
}
export default Sidebar;
