import React from "react";
class EditionSelector extends React.Component {
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
            this.props.selectEdition(event.target.value);
            this.setState({ value: event.target.value });
          }}
        >
          {this.props.editionIds ? (
            this.props.editionIds.map((edition, key) => {
              return (
                <option value={edition.code} key={key}>
                  {edition.name}
                </option>
              );
            })
          ) : (
            <option value="select">No editions loaded.</option>
          )}
        </select>
      </div>
    );
  }
}
export default EditionSelector;
