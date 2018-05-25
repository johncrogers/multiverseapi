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
                  The written Guildpact that was drawn up following the events
                  of Dissension has done little to keep the peace on Ravnica.
                  The rise of the Guildless, a rebel faction causing trouble on
                  the streets, and the inter-guild rivalries are becoming
                  problematic, and Jace Beleren, newly returned from Zendikar,
                  works with Niv-Mizzet, leader of the Izzet, to find a
                  solution. Gideon Jura arrives from Zendikar and learns of the
                  Consortium. He starts to seek out Jace.
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
