import React from "react";
class Legality extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render Legality`);
    return (
      <div>
        {this.props.details.legality ? this.props.details.legality : ""}
      </div>
    );
  }
}
export default Legality;
