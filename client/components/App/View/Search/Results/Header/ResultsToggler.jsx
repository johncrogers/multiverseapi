import React from "react";
class ResultsToggler extends React.Component {
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
            this.props.changeView("edition");
          }}
        >
          Edition
        </a>
        &nbsp;||&nbsp;
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
