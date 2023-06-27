import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    }
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({
      copied: true,
    }, () => {
      setTimeout(() => this.setState({ copied: false }), 1200);
    })
  }
  render() {
    const { name, background } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={this.props.background} onCopy={this.changeCopyState}>
        <div
          className="ColorBox"
          style={{
            background: background,
          }}
        >
          <div
            className={`ColorBox-copy-overlay ${copied && 'show'}`}
            style={{
              background: background,
            }}
          />
          <div className={`ColorBox-copy-message ${copied && 'show'}`}>
            <h1>Copied</h1>
            <span>{ name }</span>
            <span>{ background }</span>
          </div>
          <div className="ColorBox-copy-container">
            <div className="ColorBox-box-content">
              <span>{name}</span>
              <p>{background}</p>
            </div>
            <button className="ColorBox-copy-button">Copy</button>
          </div>
          <span className="ColorBox-see-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
