import React from "react";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* {console.log(this.props.card)} */}
        <span>{this.props.card.name}</span>
        <span>{this.props.card.manaCost}</span>
        <span>{this.props.card.type}</span>
        <span>{this.props.card.editionId}</span>
        <span>{this.props.card.rarity}</span>
        <span>{this.props.card.text}</span>
        <span>{this.props.card.flavor}</span>
        <span>{this.props.card.loyalty}</span>
        <span>{this.props.card.power}</span>
        <span>{this.props.card.toughness}</span>
        <br />
        <br />
      </div>
    );
  }
}
export default Card;
