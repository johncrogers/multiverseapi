import React from "react";
class FiltersView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>Filters:</h2>
        <button
          onClick={() => {
            this.props.clearFilters();
          }}
        >
          Clear Filters
        </button>
        {Object.keys(this.props.filters).map(filter => {
          return (
            <div>
              <button
                onClick={() => {
                  this.props.removeFilter(filter);
                }}
              >
                Remove
              </button>{" "}
              {filter}: {this.props.filters[filter]}
            </div>
          );
        })}
      </div>
    );
  }
}
export default FiltersView;
