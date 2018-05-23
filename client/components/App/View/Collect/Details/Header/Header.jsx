import React from "react";
import Title from "./Title.jsx";
// import Legality from "./Legality.jsx";
// import Options from "./Options.jsx";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    // this.changeName = this.changeName.bind(this);
  }
  // changeName(name) {
  //   // let newDetails = this.state.details;
  //   // newDetails.name = name;
  //   this.setState({ name: name });
  // }
  render() {
    console.log(`Render Header`);
    // let details = this.props.details;
    return (
      <div className="row">
        <div className="col">
          <h1 className="display-4">
            {this.props.details
              ? this.props.details.name
              : "No collection selected."}
          </h1>
        </div>
        <div className="col text-right" style={{ paddingTop: "10px" }}>
          {this.props.details ? (
            <button
              className="btn btn-sm btn-danger border border-dark"
              onClick={() => {
                this.props.removeCollection();
              }}
            >
              Delete {this.props.details.name}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
export default Header;
