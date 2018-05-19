import React from "react";
class CollectionSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "select"
    };
  }
  render() {
    return (
      <div>
        <select
          value={this.state.value}
          onChange={event => {
            // console.log(event);
            this.props.retrieveCollectionDetails(event.target.value);
            this.setState({ value: event.target.value });
          }}
        >
          {this.props.collectionIds.length
            ? this.props.collectionIds.map((collection, key) => {
                return (
                  <option value={collection.id} key={key}>
                    {collection.name}
                  </option>
                );
              })
            : ""}
          <option value="select">Select a collection...</option>
        </select>
      </div>
    );
  }
}
export default CollectionSelector;
