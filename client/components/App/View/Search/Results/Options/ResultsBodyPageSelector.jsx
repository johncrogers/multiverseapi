import React from "react";
class ResultsBodyPageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col-4 text-right">
        <div className="row">
          <div className="col text-center align-middle font-italic">
            <h6>
              <strong>Navigate:</strong>
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="col text-center align-middle">
            <a
              href="#"
              onClick={() => {
                this.props.viewPreviousResults();
              }}
            >
              Prev
            </a>
            &nbsp;|&nbsp;
            <a
              href="#"
              onClick={() => {
                this.props.viewNextResults();
              }}
            >
              Next
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default ResultsBodyPageSelector;
