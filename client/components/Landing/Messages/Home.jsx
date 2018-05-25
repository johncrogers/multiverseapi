import React from "react";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(`Render Home`, this.props);
    return (
      <div className="jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Welcome to Multiverse.</h1>
          <hr />

          <p className="lead text-justify">
            This application is a labor of love. Love for web development and
            Magic: The Gathering. The game has grown to have well over 30,000
            cards, and, though it's a delight to play, it can be daunting to get
            started and develop new deck combinations. Multiverse is my answer.
            With a focus on the user experience throughout, I'm striving to
            build the lightest, most intuitive, and builder-friendly experience
            as possible. As it stands, this project is in it's infancy. It has a
            long way to go, a lot of potential, but is fragile so play nice.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- John
          </p>
          <hr />
        </div>
      </div>
    );
  }
}
export default Home;
