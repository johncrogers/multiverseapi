import React from "react";
class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.details.name
    };
  }
  render() {
    console.log(`Render Title`);
    return (
      <div>
        <input
          type="text"
          // name="name"
          value={this.state.name}
          onChange={e => {
            this.setState({ name: e.target.value }, () => {
              this.props.changeName(this.state.name);
            });
          }}
        />
      </div>
    );
  }
}
export default Title;
