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
      <div className="col">
        <Header
          details={this.props.view.details}
          removeCollection={this.props.removeCollection}
          updateCollection={this.props.updateCollection}
        />
        <hr />
        <Body
          cards={this.props.view.cards}
          removeCard={this.props.removeCard}
        />
      </div>
    );
  }
}
export default Details;
