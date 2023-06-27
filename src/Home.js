import React, { Component } from 'react';
import PalletteList from './PalletteList';
import seedColors from './seedColors';
// import './Home.css';

class Home extends Component {
  static defaultProps = {
    colors: seedColors,
  }
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <PalletteList pallettes={seedColors} />
    );
  }
}

export default Home;
