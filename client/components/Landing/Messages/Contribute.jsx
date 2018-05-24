import React from "react";
class Contribute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(`Render Contribute`, this.props);
    return (
      <div className="jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Contribute:</h1>
          <hr />
          <h4 className="text-left">How to contribute:</h4>
          <hr />
          <p className="lead">
            <p className="display-6 text-justify">
              This project will be made open source, I absolutely encourage
              anyone who is interested in contributing to reach out, but I've
              not yet prepared a public worthy repository. If you are interested
              in contributing, please reach out to me at
              john.clinton.rogers@gmail.com.
            </p>
          </p>
          <hr />
          <h4 className="text-left">The Stack:</h4>
          <hr />
          <p className="lead">
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col" style={{ paddingTop: "30px" }}>
                    <img
                      className="align-middle"
                      src="images/bootstrap.png"
                      alt="Bootstrap"
                      height="100px"
                      width="100px"
                    />
                  </div>
                  <div className="col" style={{ paddingTop: "30px" }}>
                    <img
                      className="align-middle"
                      src="images/react.svg"
                      alt="React"
                      height="100px"
                      width="100px"
                    />
                  </div>
                  <div className="col" style={{ paddingTop: "30px" }}>
                    <img
                      className="align-middle"
                      src="images/nodejs.png"
                      alt="NodeJS"
                      height="100px"
                      width="100px"
                    />
                  </div>
                  <div className="col" style={{ paddingTop: "30px" }}>
                    <img
                      className="align-middle"
                      src="images/postgresql.png"
                      alt="PostgreSQL"
                      height="100px"
                      width="100px"
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <span className="text-left">
                  <strong>Thoughts on the stack:</strong>
                </span>
                <br />
                <p className="text-justify">
                  I've intentionally left it as simple as possible to start.
                  Only adding complexity where necessary for a feature. Though
                  I'm not strictly against integrating new technologies, it's
                  been my desire to manage complexity as tactfully as possible.
                </p>
              </div>
            </div>
          </p>
          <hr />
        </div>
        {/* <button
          onClick={() => {
            console.log(this.state);
          }}
        >
          State
        </button> */}
      </div>
    );
  }
}
export default Contribute;
