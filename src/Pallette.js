import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Pallette.css';
import Navbar from './Navbar';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

class Pallette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex",
      open: false,
    }
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  changeLevel(level) {
    this.setState({ level })
  }
  changeFormat(evt) {
    this.setState({
      format: evt.target.value,
      open: true,
    })
  }
  handleClose(event, reason) {
    this.setState({ open: false });
  };
  render() {
    const { colors, id, emoji } = this.props.pallette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(
      color => <ColorBox background={color[format]} name={color.name} key={color.id} pallette={id} />);
    const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={this.handleClose}>
        <i className="fa fa-2x fa-close"></i>
      </Button>
    </React.Fragment>
  );
    return (
      <div className="Pallette">
        <Navbar level={level} changeLevel={this.changeLevel} handleChange={ this.changeFormat } />
        <div className="Pallette-colors">
          {colorBoxes}
        </div>
        <div>
          <Button onClick={this.handleClose}></Button>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "left"}}
            open={this.state.open}
            autoHideDuration={3000}
            onClose={this.handleClose}
            message={`Format changed to ${this.state.format}`}
            contentProps={{
              "aria-describedby": "message-id",
            }}
            action={action}
          />
        </div>
        <footer className="Pallette-footer">
          <span className="Pallette-name">{id.replaceAll('-', " ")}</span>
          <span className="Pallette-emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Pallette;
