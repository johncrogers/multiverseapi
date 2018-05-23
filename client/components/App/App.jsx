import React from "react";
import Navigation from "./Navigation/Navigation.jsx";
import View from "./View/View.jsx";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "Search"
    };
    this.changeView = this.changeView.bind(this);
  }
  changeView(view) {
    console.log(`view: ${view}`);
    this.setState({ show: view }, () => {
      // console.log(`APP state: `, this.state);
    });
  }
  render() {
    // console.log(`Render App`);
    return (
      <div className="container-fluid">
        <Navigation
          username={this.props.username}
          logout={this.props.logout}
          changeView={this.changeView}
        />
        <View
          username={this.props.username}
          userId={this.props.userId}
          show={this.state.show}
        />
      </div>
    );
  }
}
export default App;
