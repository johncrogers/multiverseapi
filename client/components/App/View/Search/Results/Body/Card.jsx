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
      <div
        className="col"
        onClick={() => {
          this.handleFilterClick("name", this.props.card.name);
        }}
      >
        {/* <strong>Name:</strong> */}
        {this.props.card.name}
      </div>
    );
    let manaCost = (
      <div
        className="col text-right"
        onClick={() => {
          this.handleFilterClick("manaCost", this.props.card.manaCost);
        }}
      >
        {/* <strong>Mana Cost:</strong> */}
        {this.props.card.manaCost}
      </div>
    );
    let colors = (
      <div
        className="col"
        onClick={() => {
          this.handleFilterClick("colors", this.props.card.colors);
        }}
      >
        {/* <strong>Colors:</strong> */}
        {this.props.card.colors}
      </div>
    );
    let type = (
      <div
        className="col-9 text-left"
        onClick={() => {
          this.handleFilterClick("type", this.props.card.type);
        }}
      >
        {/* <strong>Type:</strong> */}
        {this.props.card.type}
      </div>
    );
    let edition = (
      <span
        className="text-right"
        onClick={() => {
          this.handleFilterClick("editionId", this.props.card.editionId);
        }}
      >
        {/* <strong>Edition:</strong> */}
        {this.props.card.editionId}
      </span>
    );
    let rarity = (
      <span
        className="text-right"
        onClick={() => {
          this.handleFilterClick("rarity", this.props.card.rarity);
        }}
      >
        {/* <strong>Rarity:</strong> */}
        {this.props.card.rarity}
      </span>
    );
    let text = (
      <div
        className="col"
        onClick={() => {
          this.handleFilterClick("text", this.props.card.text);
        }}
      >
        <strong>Text:</strong> {this.props.card.text}
      </div>
    );
    let flavor = (
      <div
        className="col"
        onClick={() => {
          this.handleFilterClick("flavor", this.props.card.flavor);
        }}
      >
        <strong>Flavor:</strong> {this.props.card.flavor}
      </div>
    );
    let loyalty = (
      <span
        // className="col"
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
        // className="col"
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
        // className="col"
        onClick={() => {
          this.handleFilterClick("toughness", this.props.card.toughness);
        }}
      >
        <strong>Toughness:</strong>
        {this.props.card.toughness}
      </span>
    );
    return (
      <div className="col border border-dark">
        <div className="row bg-primary text-light">
          {name}
          {/* {colors} */}
          {this.props.card.manaCost !== undefined ? manaCost : null}
        </div>
        <div className="row bg-secondary text-light">
          {type}
          <div className="col-3 text-right">
            {edition}&nbsp;
            {rarity}
          </div>
        </div>
        <div className="row">{this.props.card.text ? text : null}</div>
        <div className="row">{this.props.card.flavor ? flavor : ""}</div>
        <div className="row">
          <div className="col text-right">
            {this.props.card.loyalty ? loyalty : ""}&nbsp;
            {this.props.card.power ? power : ""}&nbsp;
            {this.props.card.toughness ? toughness : ""}
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
