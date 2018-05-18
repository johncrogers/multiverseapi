import React from "react";
class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render Title`);
    return <div>Title</div>;
  }
}
export default Title;
