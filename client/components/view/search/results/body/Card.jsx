import React from "react";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleFilterClick(property, value) {
    this.props.filters[property] === value
      ? this.props.removeFilter(property, value)
      : this.props.addFilter(property, value);
  }
  render() {
    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.handleFilterClick("name", this.props.card.name);
            }}
          >
            <strong>Name:</strong>
            {this.props.card.name}
          </span>
          <span
            onClick={() => {
              this.handleFilterClick("manaCost", this.props.card.manaCost);
            }}
          >
            <strong>Mana Cost:</strong>
            {this.props.card.manaCost}
          </span>
        </div>
        <div>
          <span
            onClick={() => {
              this.handleFilterClick("type", this.props.card.type);
            }}
          >
            <strong>Type:</strong>
            {this.props.card.type}
          </span>
          <span
            onClick={() => {
              this.handleFilterClick("editionId", this.props.card.editionId);
            }}
          >
            <strong>Edition:</strong>
            {this.props.card.editionId}
          </span>
          <span
            onClick={() => {
              this.handleFilterClick("rarity", this.props.card.rarity);
            }}
          >
            <strong>Rarity:</strong>
            {this.props.card.rarity}
          </span>
        </div>
        <div>
          <span
            onClick={() => {
              this.handleFilterClick("text", this.props.card.text);
            }}
          >
            <strong>Text:</strong>
            {this.props.card.text}
          </span>
          <span
            onClick={() => {
              this.handleFilterClick("flavor", this.props.card.flavor);
            }}
          >
            <strong>Flavor:</strong>
            {this.props.card.flavor}
          </span>
        </div>
        <div>
          <span
            onClick={() => {
              this.handleFilterClick("loyalty", this.props.card.loyalty);
            }}
          >
            <strong>Loyalty:</strong>
            {this.props.card.loyalty}
          </span>
          <span
            onClick={() => {
              this.handleFilterClick("power", this.props.card.power);
            }}
          >
            <strong>Power:</strong>
            {this.props.card.power}
          </span>
          <span
            onClick={() => {
              this.handleFilterClick("toughness", this.props.card.toughness);
            }}
          >
            <strong>Toughness:</strong>
            {this.props.card.toughness}
          </span>
        </div>
        <button
          onClick={() => {
            this.props.addCardToSelection(this.props.card);
          }}
        >
          Add to selection
        </button>
        <br />
        <br />
      </div>
    );
  }
}
export default Card;
