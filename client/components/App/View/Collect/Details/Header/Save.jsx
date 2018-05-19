import React from "react";
class Save extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render Save`);
    let details = this.props.details;
    return (
      <button
        onClick={() => {
          this.props.updateCollection(
            details.collectionId,
            "name",
            details.name
          );
        }}
      >
        Save
      </button>
    );
  }
}
export default Save;
