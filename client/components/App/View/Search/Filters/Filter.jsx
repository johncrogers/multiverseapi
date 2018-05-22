import React from "react";
class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }
  render() {
    // console.log(`Render Filter`);
    // let stateItem = {};
    // stateItem[this.props.filter] = "";
    console.log("Filter: ", this.props.filter);
    return (
      <span>
        <div className="row">
          <div className="col">
            <span className="text-left">
              <strong>{this.props.filter.toUpperCase()}:</strong>&nbsp;{
                this.state.value
              }
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="text"
              onChange={e => {
                this.setState({ value: e.target.value }, () => {
                  console.log(`state in filter: `, this.state.value);
                });
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col text-right">
            <a
              className=" badge badge-danger"
              href="#"
              onClick={() => {
                this.props.removeFilter(this.props.filter);
              }}
            >
              <span className="text-right">remove</span>
            </a>&nbsp;
            <a
              className=" badge badge-success"
              href="#"
              onClick={() => {
                this.props.addFilter(this.props.filter, this.state.value);
              }}
            >
              <span className="text-right">change</span>
            </a>
          </div>
        </div>
      </span>
    );
  }
}
export default Filter;
