import React from "react";
class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-2">
        <div className="row">
          <div className="col">
            <h4>FILTERS:</h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {Object.keys(this.props.filters).map(filter => {
              return (
                <div className="row">
                  <div className="col">
                    <div className="row">
                      <div className="col">
                        <strong>{filter.toUpperCase()}:</strong>
                      </div>
                      <div className="col">
                        <input type="text" value={this.props.filters[filter]} />
                      </div>
                    </div>
                  </div>
                  <div className="col text-right">
                    <button
                      className="btn-danger"
                      onClick={() => {
                        this.props.removeFilter(filter);
                      }}
                    >
                      &times;
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.clearFilters();
              }}
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Filters;
