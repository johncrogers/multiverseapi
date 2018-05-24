import React from "react";
class ResultsToggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // <div className="col-4 text-left">
    //   <div className="row">
    //     <div className="col text-center align-middle font-italic">
    //       <h6>
    //         <strong>Select a view:</strong>
    //       </h6>
    //     </div>
    //   </div>
    //   <div className="row">
    //     <div className="col text-center align-middle">
    //       <a
    //         href="#"
    //         onClick={() => {
    //           this.props.changeView("edition");
    //         }}
    //       >
    //         Edition
    //       </a>
    //       &nbsp;|&nbsp;
    //       <a
    //         href="#"
    //         onClick={() => {
    //           this.props.changeView("collection");
    //         }}
    //       >
    //         Collection
    //       </a>
    //     </div>
    //   </div>
    // </div>
    return (
      <div className="col-4">
        <div className="row">
          <div className="col text-middle">
            <div className="text-center align-middle">
              <strong>Select a view:</strong>
            </div>
            <div className="text-center align-middle">
              <a
                href="#"
                onClick={() => {
                  this.props.changeView("edition");
                }}
              >
                Edition
              </a>
              &nbsp;|&nbsp;
              <a
                href="#"
                onClick={() => {
                  this.props.changeView("collection");
                }}
              >
                Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ResultsToggler;
