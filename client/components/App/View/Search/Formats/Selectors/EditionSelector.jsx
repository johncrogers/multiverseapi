import React from "react";
class EditionSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "LEA"
    };
  }
  render() {
    return (
      <div>
        <select
          value={this.state.value}
          onChange={event => {
            this.props.retrieveEditionDetails(event.target.value);
            this.setState({ value: event.target.value });
          }}
        >
          {this.props.editionIds.length ? (
            this.props.editionIds.map((edition, key) => {
              return (
                <option value={edition.code} key={key}>
                  {edition.name}
                </option>
              );
            })
          ) : (
            <option value="select">Select an edition...</option>
          )}
        </select>
      </div>
    );
  }
}
export default EditionSelector;
