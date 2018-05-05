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
          Results Header
          <div>Sort Results</div>
        </div>
        <div>Hide Results Header</div>
      </div>
    );
  }
}
export default ResultsViewHeader;
