import React from "react";
import Description from "./Description/Description.jsx";
import Cards from "./Cards/Cards.jsx";
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render Body`);
    return (
      <div>
        <Description />
        <Cards />
      </div>
    );
  }
}
export default Body;
