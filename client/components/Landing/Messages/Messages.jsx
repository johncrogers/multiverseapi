import React from "react";
import Home from "./Home.jsx";
import Contribute from "./Contribute.jsx";
import Contact from "./Contact.jsx";
import HowTo from "./HowTo.jsx";
class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(`Render Messages`, this.props);
    switch (this.props.message) {
      case "Contribute":
        return <Contribute />;
        break;
      case "Home":
        return <Home />;
        break;
      case "HowTo":
        return <HowTo />;
        break;
      case "Contact":
        return <Contact />;
        break;
      default:
        return <Home />;
        break;
    }
  }
}
export default Messages;
