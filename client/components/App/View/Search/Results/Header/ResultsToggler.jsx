import React from "react";
class ResultsToggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-10">
        <h6>
          <strong>Select a view:</strong>
        </h6>
        {"  "}
        <a
          href="#"
          onClick={() => {
            this.props.changeView("edition");
          }}
        >
          Edition
        </a>
        &nbsp;|&nbsp;
        <a
          href="#"
          onClick={() => {
            this.props.changeView("collection");
          }}
        >
          Collection
        </a>
      </div>
    );
  }
}
export default ResultsToggler;
