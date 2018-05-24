import React from "react";
class ResultsBodyPageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col-4">
        <div className="row">
          <div className="col text-middle">
            <div className="text-center align-middle">
              <strong>Navigate:</strong>
            </div>
            <div className="text-center align-middle">
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
      </div>
    );
  }
}
export default ResultsBodyPageSelector;
