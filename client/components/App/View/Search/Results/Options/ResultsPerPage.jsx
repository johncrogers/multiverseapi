import React from "react";
class ResultsPerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(`Render ResultsPerPage`);
    // <div className="col-4">
    //   <div className="row">
    //     <div className="col text-center align-middle font-italic">
    //       <h6>
    //         <strong>Results per page:</strong>
    //       </h6>
    //     </div>
    //   </div>
    //   <div className="row">
    //     <span className="col text-center align-middle">
    //       <a
    //         href="#"
    //         onClick={() => {
    //           this.props.changeResultsPerPage(10);
    //         }}
    //       >
    //         10
    //       </a>&nbsp;
    //       <a
    //         href="#"
    //         onClick={() => {
    //           this.props.changeResultsPerPage(25);
    //         }}
    //       >
    //         25
    //       </a>&nbsp;
    //       <a
    //         href="#"
    //         onClick={() => {
    //           this.props.changeResultsPerPage(50);
    //         }}
    //       >
    //         50
    //       </a>&nbsp;
    //       <a
    //         href="#"
    //         onClick={() => {
    //           this.props.changeResultsPerPage(500);
    //         }}
    //       >
    //         All
    //       </a>&nbsp;
    //       {/* <input
    //         type="text"
    //         onChange={e => {
    //           this.props.changeResultsPerPage(e.target.value);
    //         }}
    //       /> */}
    //     </span>
    //   </div>
    // </div>
    return (
      <div className="col-4">
        <div className="row">
          <div className="col text-middle">
            <div className="text-center align-middle">
              <strong>Results per page:</strong>
            </div>
            <div className="text-center align-middle">
              <a
                href="#"
                onClick={() => {
                  this.props.changeResultsPerPage(10);
                }}
              >
                10
              </a>&nbsp;|&nbsp;
              <a
                href="#"
                onClick={() => {
                  this.props.changeResultsPerPage(25);
                }}
              >
                25
              </a>&nbsp;|&nbsp;
              <a
                href="#"
                onClick={() => {
                  this.props.changeResultsPerPage(50);
                }}
              >
                50
              </a>&nbsp;|&nbsp;
              <a
                href="#"
                onClick={() => {
                  this.props.changeResultsPerPage(500);
                }}
              >
                All
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ResultsPerPage;
