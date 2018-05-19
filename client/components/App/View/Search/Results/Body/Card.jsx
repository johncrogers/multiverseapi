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
    let name = (
      <span
        onClick={() => {
          this.handleFilterClick("name", this.props.card.name);
        }}
      >
        <strong>Name:</strong>
        {this.props.card.name}
      </span>
    );
    let manaCost = (
      <span
        onClick={() => {
          this.handleFilterClick("manaCost", this.props.card.manaCost);
        }}
      >
        <strong>Mana Cost:</strong>
        {this.props.card.manaCost}
      </span>
    );
    let colors = (
      <span
        onClick={() => {
          this.handleFilterClick("colors", this.props.card.colors);
        }}
      >
        <strong>Colors:</strong>
        {this.props.card.colors}
      </span>
    );
    let type = (
      <span
        onClick={() => {
          this.handleFilterClick("type", this.props.card.type);
        }}
      >
        <strong>Type:</strong>
        {this.props.card.type}
      </span>
    );
    let edition = (
      <span
        onClick={() => {
          this.handleFilterClick("editionId", this.props.card.editionId);
        }}
      >
        <strong>Edition:</strong>
        {this.props.card.editionId}
      </span>
    );
    let rarity = (
      <span
        onClick={() => {
          this.handleFilterClick("rarity", this.props.card.rarity);
        }}
      >
        <strong>Rarity:</strong>
        {this.props.card.rarity}
      </span>
    );
    let text = (
      <span
        onClick={() => {
          this.handleFilterClick("text", this.props.card.text);
        }}
      >
        <strong>Text:</strong>
        {this.props.card.text}
      </span>
    );
    let flavor = (
      <span
        onClick={() => {
          this.handleFilterClick("flavor", this.props.card.flavor);
        }}
      >
        <strong>Flavor:</strong>
        {this.props.card.flavor}
      </span>
    );
    let loyalty = (
      <span
        onClick={() => {
          this.handleFilterClick("loyalty", this.props.card.loyalty);
        }}
      >
        <strong>Loyalty:</strong>
        {this.props.card.loyalty}
      </span>
    );
    let power = (
      <span
        onClick={() => {
          this.handleFilterClick("power", this.props.card.power);
        }}
      >
        <strong>Power:</strong>
        {this.props.card.power}
      </span>
    );
    let toughness = (
      <span
        onClick={() => {
          this.handleFilterClick("toughness", this.props.card.toughness);
        }}
      >
        <strong>Toughness:</strong>
        {this.props.card.toughness}
      </span>
    );
    return (
      <div>
        <div>
          {name}
          {this.props.card.manaCost !== undefined ? manaCost : null}
          {colors}
        </div>
        <div>
          {type}
          {edition}
          {rarity}
        </div>
        <div>{this.props.card.text ? text : null}</div>
        <div>{this.props.card.flavor ? flavor : ""}</div>
        <div>
          {this.props.card.loyalty ? loyalty : ""}
          {this.props.card.power ? power : ""}
          {this.props.card.toughness ? toughness : ""}
        </div>
      </div>
    );
  }
}
export default Card;
