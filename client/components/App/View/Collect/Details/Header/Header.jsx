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
      <div>
        <h2>
          {this.props.details
            ? this.props.details.name
            : "No collection selected."}
        </h2>
        {/* <input
          type="text"
          onChange={e => {
            this.setState({ name: e.target.value });
          }}
        />
        <button
          onClick={() => {
            this.props.updateCollection(
              details.id,
              "name",
              details.name,
              this.state.name
            );
          }}
        >
          Change Name
        </button> */}
        {/* <Title details={this.state.details} changeName={this.changeName} /> */}
        {/* <Legality details={this.props.details} /> */}
        {/* <button
          onClick={() => {
            this.props.updateCollection(
              details.id,
              "name",
              details.name,
              this.state.details.name
            );
          }}
        >
          Save
        </button> */}
        {this.props.details ? (
          <button
            onClick={() => {
              this.props.removeCollection();
            }}
          >
            Delete {this.props.details.name}
          </button>
        ) : (
          ""
        )}

        {/* <Options
          details={this.state.details}
          removeCollection={this.props.removeCollection}
          updateCollection={this.props.updateCollection}
        /> */}
      </div>
    );
  }
}
export default Header;
