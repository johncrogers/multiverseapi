import React from "react";
import Remove from "./Remove.jsx";
import Details from "./Details.jsx";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render Card`);
    return (
      <div>
        <Remove />
        <Details />
      </div>
    );
  }
}
export default Card;
