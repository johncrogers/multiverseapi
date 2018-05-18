import React from "react";
class Hider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render Hider`);
    return <div>Hider</div>;
  }
}
export default Hider;
