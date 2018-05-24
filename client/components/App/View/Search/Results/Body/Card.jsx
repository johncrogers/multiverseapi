import React from "react";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      colorCodes: {
        R: ["r", ["rgba(255, 102, 0, .2)"]],
        G: ["g", ["rgba(28, 201, 64, .2)"]],
        U: ["u", ["rgba(28, 145, 201, .2)"]],
        B: ["b", ["rgba(168, 163, 153, .2)"]],
        W: ["w", ["rgba(255, 204, 102, .2)"]],
        "G/U": ["gu", ["rgba(28, 201, 64, .2)", "rgba(28, 145, 201, .2)"]],
        "B/G": ["bg", ["rgba(168, 163, 153, .2)", "rgba(28, 201, 64, .2)"]],
        "B/R": ["br", ["rgba(168, 163, 153, .2)", "rgba(255, 102, 0, .2)"]],
        "U/B": ["ub", ["rgba(28, 145, 201, .2)", "rgba(168, 163, 153, .2)"]],
        "R/W": ["rw", ["rgba(255, 102, 0, .2)", "rgba(255, 204, 102, .2)"]],
        "U/R": ["ur", ["rgba(28, 145, 201, .2)", "rgba(255, 102, 0, .2)"]],
        "R/G": ["rg", ["rgba(255, 102, 0, .2)", "rgba(28, 201, 64, .2)"]],
        "W/B": ["wb", ["rgba(255, 204, 102, .2)", "rgba(168, 163, 153, .2)"]],
        "W/U": ["wu", ["rgba(255, 204, 102, .2)", "rgba(28, 145, 201, .2)"]],
        "G/W": ["gw", ["rgba(28, 201, 64, .2)", "rgba(255, 204, 102, .2)"]],
        "0": ["0", ["rgba(0, 0, 0, .1)"]],
        "1": ["1", ["rgba(0, 0, 0, .1)"]],
        "2": ["2", ["rgba(0, 0, 0, .1)"]],
        "3": ["3", ["rgba(0, 0, 0, .1)"]],
        "4": ["4", ["rgba(0, 0, 0, .1)"]],
        "5": ["5", ["rgba(0, 0, 0, .1)"]],
        "6": ["6", ["rgba(0, 0, 0, .1)"]],
        "7": ["7", ["rgba(0, 0, 0, .1)"]],
        "8": ["8", ["rgba(0, 0, 0, .1)"]],
        "9": ["9", ["rgba(0, 0, 0, .1)"]],
        X: ["x", ["rgba(0, 0, 0, .1)"]]
      }
    };
    this.buildGradientCode = this.buildGradientCode.bind(this);
    // let rgba(255, 102, 0, 0.25) = rgba(255, 102, 0, 0.25);
    // let green = rgba(28, 201, 64, 0.25);
    // let blue = rgba(28, 145, 201, 0.25);
    // let black = rgba(168, 163, 153, 0.25);
    // let white = rgba(255, 204, 102, 0.25);
  }
  handleFilterClick(property, value) {
    this.props.filters[property] === value
      ? this.props.removeFilter(property, value)
      : this.props.addFilter(property, value);
  }
  buildGradientCode(costCode) {
    // console.log(`costCode: `, costCode);
    let style = {
      background: "AliceBlue"
    };
    // console.log(`props: `, this.props);
    if (!costCode) {
      // console.log(`No cost:`, this.props.card.type.includes("Land"));
      if (this.props.card.type.includes("Land")) {
        return style;
      }
      return style;
    }
    costCode = costCode.split("");
    costCode.shift();
    costCode.pop();
    costCode = costCode.join("").split("}{");
    let gradient = "linear-gradient(to right, ";
    let colorsVisited = [];
    let colorsToDisplay = [];
    for (let code of costCode) {
      // console.log(`loop iteration:`);
      // console.log(` -> code: ${code}`);
      if (colorsVisited.includes(code)) {
        // console.log(` -> code already present. skipping...`);
        continue;
      }
      colorsVisited.push(code);
      // console.log(` -> code added to visited.`, colorsVisited);
      if (code.includes("/")) {
        // console.log(` -> target to add: `, this.state.colorCodes[code][1]);
        colorsToDisplay = colorsToDisplay.concat(
          this.state.colorCodes[code][1]
        );
        // console.log(` -> code added to colorsToDisplay: `, colorsToDisplay);
        continue;
      }
      colorsToDisplay.push(this.state.colorCodes[code][1].join(", "));
      // console.log(` -> code added to colorsToDisplay: `, colorsToDisplay);
    }
    // console.log(`colorsToDisplay after loop: `, colorsToDisplay);
    if (colorsToDisplay[colorsToDisplay.length - 1] !== "rgba(0, 0, 0, .1)") {
      while (colorsToDisplay[0] === "rgba(0, 0, 0, .1)") {
        colorsToDisplay.shift();
      }
    }
    // console.log(`gradient: `, gradient);
    // console.log(`colorsToDisplay: `, colorsToDisplay);
    if (colorsToDisplay.length === 1) {
      style.background = colorsToDisplay[0];
      return style;
    }
    gradient += colorsToDisplay.join(", ");
    gradient += ")";
    style.background = gradient;
    return style;
  }
  showManaCostSymbol(costCode) {
    if (!costCode) {
      return null;
    }
    let elements = [];

    costCode = costCode.split("");
    costCode.shift();
    costCode.pop();
    costCode = costCode.join("").split("}{");

    for (let manaCost in costCode) {
      elements.push(
        <span className="align-top">
          <img
            src={`images/mana/${
              this.state.colorCodes[costCode[manaCost]][0]
            }.png`}
            width="15px"
            height="15px"
            style={{
              marginLeft: "1px",
              marginRight: "1px",
              marginBottom: "2px"
            }}
          />
        </span>
      );
    }
    return elements;
  }
  componentDidMount() {}
  render() {
    let name = (
      <div
        className="col"
        onClick={() => {
          this.handleFilterClick("name", this.props.card.name);
        }}
      >
        <span className="align-middle">
          <strong>{this.props.card.name}</strong>
        </span>
      </div>
    );
    let manaCost = (
      <div
        className="col text-right"
        onClick={() => {
          this.handleFilterClick("manaCost", this.props.card.manaCost);
        }}
      >
        {this.showManaCostSymbol(this.props.card.manaCost)}
      </div>
    );
    let colors = (
      <div
        className="col"
        onClick={() => {
          this.handleFilterClick("colors", this.props.card.colors);
        }}
      >
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
        {this.props.card.rarity}
      </span>
    );
    let text = (
      <span
        className="col"
        style={this.buildGradientCode(this.props.card.manaCost)}
        onClick={() => {
          this.handleFilterClick("text", this.props.card.text);
        }}
      >
        <strong>Text:</strong> {this.props.card.text}
      </span>
    );
    let flavor = (
      <span
        className="col"
        style={this.buildGradientCode(this.props.card.manaCost)}
        onClick={() => {
          this.handleFilterClick("flavor", this.props.card.flavor);
        }}
      >
        <strong>Flavor:</strong> {this.props.card.flavor}
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
      <div className="col border border-dark">
        <div className="row text-light bg-dark">
          {name}
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
          <div
            className="col text-right"
            style={this.buildGradientCode(this.props.card.manaCost)}
          >
            {this.props.card.loyalty ? loyalty : ""}&nbsp;
            {this.props.card.power ? power : ""}&nbsp;
            {this.props.card.toughness ? toughness : ""}
          </div>
        </div>
        {/* <button
          onClick={() => {
            console.log(this.buildGradientCode(this.props.card.manaCost));
          }}
        >
          buildGradientCode
        </button>
        <button
          onClick={() => {
            console.log(this.props);
          }}
        >
          props
        </button> */}
      </div>
    );
  }
}
export default Card;
