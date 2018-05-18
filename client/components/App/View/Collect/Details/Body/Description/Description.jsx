import React from "react";
import Text from "./Text.jsx";
import Hider from "./Hider.jsx";
class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render Decription`);
    return (
      <div>
        <Text />
        <Hider />
      </div>
    );
  }
}
export default Description;
