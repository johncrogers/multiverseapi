import React from "react";
class HowTo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render HowTo`, this.props);
    return (
      <div className="jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Using Multiverse:</h1>
          <hr />
          <div className="row">
            <div className="col text-center">
              <p className="lead">
                <p className="display-6 text-center">
                  Multiverse has two main features. Search, and Collect.
                </p>
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <h4 className="text-center">Filters:</h4>
              <hr />
              <p className="lead">
                <p className="display-6 text-justify">
                  This application is intended to speed up the filtering process
                  dramatically. Every point on the cards can be clicked to add a
                  filter to your search. Once added, you can simply change the
                  text in the input in order to modify the specificity your
                  search.
                </p>
              </p>
            </div>
            <div className="col">
              <img
                src="/images/gifs/filters.gif"
                alt="Filters"
                height="250"
                width="500"
                // className="border border-dark"
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <img
                src="/images/gifs/selection.gif"
                alt="Selection"
                height="250"
                width="500"
                // className="border border-dark"
              />
            </div>
            <div className="col">
              <h4 className="text-center">Selection:</h4>
              <hr />
              <p className="lead">
                <p className="display-6 text-justify">
                  As you find cards that pique your interest, you can add them
                  to your selection. Your selection serves much like a shopping
                  cart or wishlist except that you can save the contents as a
                  new collection which can be edited over time. Clump together
                  favorites, themes, or anything you'd like to review and save
                  em!
                </p>
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <h4 className="text-center">Collection:</h4>
              <hr />
              <p className="lead">
                <p className="display-6 text-justify">
                  Editing a collection is easy in the Multiverse. You can edit
                  them directly from the search, or open them in the collection
                  editor itself.
                </p>
              </p>
            </div>
            <div className="col">
              <img
                src="/images/gifs/collection.gif"
                alt="Collection"
                height="250"
                width="500"
                // className="border border-dark"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HowTo;
