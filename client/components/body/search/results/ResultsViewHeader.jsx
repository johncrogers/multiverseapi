import React from "react";
class ResultsViewHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <h1>{this.props.viewDetails.name}</h1>
          <h3>{this.props.viewDetails.releaseDate}</h3>
        </div>
        <div>
          <a
            href="#"
            onClick={() => {
              this.props.selectView("edition");
            }}
          >
            Edition
          </a>
          &nbsp;||&nbsp;
          <a
            href="#"
            onClick={() => {
              this.props.selectView("collection");
            }}
          >
            Collection
          </a>
        </div>
        {/* <div>Sort Results</div> */}
        {/* <div>Hide Results Header</div> */}
      </div>
    );
  }
}
export default ResultsViewHeader;
