import React from "react";
class ResultsBodyPageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col-2 text-right">
        <h6>
          <strong>Navigate:</strong>
        </h6>
        {/* <br /> */}
        <a
          href="#"
          onClick={() => {
            this.props.viewPreviousResults();
          }}
        >
          Prev
        </a>
        {/* {" || "} */}&nbsp;|&nbsp;
        <a
          href="#"
          onClick={() => {
            this.props.viewNextResults();
          }}
        >
          Next
        </a>
      </div>
    );
  }
}
export default ResultsBodyPageSelector;
