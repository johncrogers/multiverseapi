import React from "react";
import Title from "./Title.jsx";
import Legality from "./Legality.jsx";
import Options from "./Options.jsx";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render Header`);
    return (
      <div>
        <Title />
        <Legality />
        <Options />
      </div>
    );
  }
}
export default Header;
