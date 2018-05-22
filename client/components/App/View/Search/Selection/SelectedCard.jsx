import React from "react";
class SelectedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col-9 text-left">
          <span>{this.props.card.name}</span>
        </div>
        <div className="col-3">
          <span className="text-right">
            <a
              href="#"
              className="badge badge-danger border border-dark"
              // className=""
              onClick={() => {
                this.props.removeCardFromSelection(this.props.card.id);
              }}
            >
              &times;
            </a>
          </span>
        </div>
        <hr />
      </div>
    );
  }
}
export default SelectedCard;
