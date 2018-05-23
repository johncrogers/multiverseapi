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
          <a href="https://github.com/johncrogers">johncrogers</a>
          <br />
          <strong>LinkedIn:</strong>
          &nbsp;
          <a href="https://www.linkedin.com/in/mrjohncrogers/">mrjohncrogers</a>
          <br />
          <strong>Email:</strong>
          &nbsp;
          <a href="mailto:john.clinton.rogers@gmail.com">
            john.clinton.rogers@gmail.com
          </a>
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
