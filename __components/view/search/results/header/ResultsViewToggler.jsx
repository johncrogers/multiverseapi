import React from "react";
class ResultsViewToggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>Select a view:</h3>
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
    );
  }
}
export default ResultsViewToggler;
