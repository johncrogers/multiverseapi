import React from "react";
import Header from "./Header/Header.jsx";
import Body from "./Body/Body.jsx";
class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render Details`);
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}
export default Details;
