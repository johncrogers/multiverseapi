import React from "react";
import Card from "./Card.jsx";
class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render Cards`);
    return (
      <div>
        <Card />
      </div>
    );
  }
}
export default Cards;
