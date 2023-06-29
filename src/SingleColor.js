import React, { Component } from 'react';
let path = (window.location.pathname.split('/'));
let pallette = path[2];
let color = path[3];

class SingleColor extends Component {
  static defaultProps = {
  }
  constructor(props) {
    super(props);
    this.state = {
      pallette: pallette,
      color: color,
    }
  }
  render() {
    return (
      <h1>Single Color</h1>
    );
  }
}

export default SingleColor;
