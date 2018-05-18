import React from "react";
class ResultsBodyPageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <a
          href="#"
          onClick={() => {
            this.props.viewPreviousResults();
          }}
        >
          Prev
        </a>
        {" || "}
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
