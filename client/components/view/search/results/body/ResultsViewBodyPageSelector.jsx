import React from "react";
class ResultsViewBodyPageSelector extends React.Component {
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
            this.props.handlePageChangeClick("prev");
          }}
        >
          Prev
        </a>
        {" || "}
        <a
          href="#"
          onClick={() => {
            this.props.handlePageChangeClick("next");
          }}
        >
          Next
        </a>
      </div>
    );
  }
}
export default ResultsViewBodyPageSelector;
