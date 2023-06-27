import * as React from 'react';
import { Component } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
    }
    // this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    console.log(evt.target.value);
    this.setState = {
      format: evt.target.value
    }
    this.props.handleChange(evt.target.value);
  }
  render() {
    const { level, changeLevel, handleChange, format } = this.props;
    const defaultFormat = this.state.format;
    return (
      <header className="Navbar">
        <div className="Navbar-logo">
          <a href="/">RCPv1</a>
        </div>
        <span className="Navbar-level">Level : { level }</span>
        <div className="Navbar-slider">
          <Slider defaultValue={level} min={100} max={900} step={100} onChange={changeLevel} />
        </div>
        <div className="Navbar-select-container">
          <Select defaultValue={defaultFormat} value={format} onChange={handleChange}>
            <MenuItem name="hex" value="hex">Hex #FFFFFF</MenuItem>
            <MenuItem name="rgb" value="rgb">rgb (255,255,255)</MenuItem>
            <MenuItem name="rgba" value="rgba">rgba (255,255,255,1)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default Navbar;
