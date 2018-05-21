import React from "react";
class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(`Render AddButton`);
    return (
      <button
        onClick={() => {
          // console.log(this.props);
          this.props.addCardToCollection(
            this.props.card.multiverseid,
            this.props.collectionId
          );
        }}
      >
        Add to {'"' + this.props.collectionName + '"'}
      </button>
    );
  }
}
export default AddButton;