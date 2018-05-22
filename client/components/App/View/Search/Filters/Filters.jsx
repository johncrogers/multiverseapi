import React from "react";
import Filter from "./Filter.jsx";
class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const clearFilters = (
      <button
        className="btn btn-danger btn-sm border border-dark"
        onClick={() => {
          this.props.clearFilters();
        }}
      >
        Clear Filters
      </button>
    );
    const noFilters = (
      <div className="row">
        <div className="col text-center">
          <span className="">No filters applied yet.</span>
        </div>
      </div>
    );
    return (
      <div className="col-2">
        {/* <div className="container-fluid"> */}
        <div className="row bg-secondary text-light">
          <div className="col border border-dark">
            <h4>
              <span className="align-middle">FILTERS:</span>
            </h4>
          </div>
        </div>
        {Object.keys(this.props.filters).length
          ? Object.keys(this.props.filters).map(filter => {
              return (
                <Filter
                  filter={filter}
                  key={filter}
                  value={this.props.filters[filter]}
                  removeFilter={this.props.removeFilter}
                  addFilter={this.props.addFilter}
                />
              );
            })
          : noFilters}
        <div className="row text-center">
          <div className="col">
            {/* <br /> */}
            {Object.keys(this.props.filters).length ? clearFilters : null}
          </div>
        </div>
        {/* </div> */}
      </div>
    );
  }
}
export default Filters;
