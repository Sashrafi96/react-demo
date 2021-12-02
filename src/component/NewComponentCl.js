import React, { Component } from "react";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";

class NewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Subscribe to react",
      sub: "Subscribe",
      imgurl: img1,
    };
  }
  buttonChange = () => {
    this.setState({
      message: "Hit the bell icon to never miss an update",
      sub: "Subscribed",
    });
  };

  imageChange = () => {
    this.setState({
      imgurl: img2,
      message: "Thanks for subscribing!",
    });
  };
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.buttonChange}>{this.state.sub}</button>
        <p />
        <img
          style={{ width: "70px", height: "70px" }}
          src={this.state.imgurl}
          onClick={this.imageChange}
          alt=""
        />
      </div>
    );
  }
}

export default NewComponent;
