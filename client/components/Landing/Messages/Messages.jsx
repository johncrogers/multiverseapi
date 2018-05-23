import React from "react";
import Home from "./Home.jsx";
import Contribute from "./Contribute.jsx";
import Contact from "./Contact.jsx";
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
