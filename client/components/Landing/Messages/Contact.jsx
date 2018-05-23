import React from "react";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(`Render Contact`, this.props);
    return (
      <div className="jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Contact:</h1>
          <hr />
          <strong>Github:</strong>
          &nbsp;
          <a href="git">johncrogers</a>
          <br />
          <strong>LinkedIn:</strong>
          &nbsp;
          <a href="linked">mrjohncrogers</a>
          <br />
          <strong>Email:</strong>
          &nbsp;
          <a href="email">john.clinton.rogers</a>
          {/* <button
          onClick={() => {
            console.log(this.state);
          }}
        >
          State
        </button> */}
          <hr />
        </div>
      </div>
    );
  }
}
export default Contact;
