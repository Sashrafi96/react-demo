import React from "react";

class TodoContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>I am in Class Component and Age is {this.props.age}</h1>
      </div>
    );
  }
}

export default TodoContainer;
