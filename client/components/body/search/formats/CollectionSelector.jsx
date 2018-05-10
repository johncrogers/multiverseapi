import React from "react";
class CollectionSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "select"
    };
  }
  handleChange() {
    //
  }
  render() {
    return (
      <select
        value={this.state.value}
        onChange={event => {
          this.props.selectCollection(0, event.target.value);
          this.setState({ value: event.target.value });
        }}
      >
        <option value="select">Select a collection</option>
        {/* <option value="2">Another Test Collection</option> */}
      </select>
    );
  }
}
export default CollectionSelector;
