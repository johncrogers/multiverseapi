import React from "react";
class ResultsViewBodyPageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
    this.changePage = this.changePage.bind(this);
  }
  changePage(num) {
    this.props.setCurrentView(num);
  }
  render() {
    return (
      <div>
        <a
          href="#"
          onClick={() => {
            this.setState({ page: this.state.page - 1 }, () => {
              this.changePage(this.state.page - 1);
            });
          }}
        >
          Prev
        </a>
        {" || "}
        <a
          href="#"
          onClick={() => {
            this.setState({ page: this.state.page + 1 }, () => {
              this.changePage(this.state.page + 1);
            });
          }}
        >
          Next
        </a>
      </div>
    );
  }
}
export default ResultsViewBodyPageSelector;
