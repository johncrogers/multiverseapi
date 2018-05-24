import React from "react";
class ResultsHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="row">
            {/* <div class="jumbotron-fluid"> */}
            <div className="container">
              <h1 className="display-3" style={{ margin: "5px" }}>
                {this.props.details
                  ? this.props.details.name
                  : `No ${this.props.show} selected.`}
              </h1>
            </div>
            {/* </div> */}
          </div>
          <div className="row">
            <div className="col">
              <hr style={{ margin: "3px" }} />
              <div>
                <strong>Lore:</strong>
              </div>
              <hr style={{ margin: "3px" }} />
            </div>
          </div>
          <div className="row">
            <div className="row">
              <div className="col text-justify">
                <div className="container">
                  The story of Arabian Nights is set on one of the planes of
                  Rabiah, which experienced an event called the Thousandfold
                  Refraction, creating one thousand and one identical planes.
                  The story told the life of the planeswalker Taysir – he was
                  refracted into five pieces by the Thousandfold Refraction, and
                  manipulated by Queen Naliah into becoming one again,
                  reigniting his planeswalker spark. He chose to leave, however,
                  and Naliah afterwards cast a spell that prevented
                  planeswalkers from ever coming to the 1001 versions of Rabiah
                  ever again.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ResultsHeader;
