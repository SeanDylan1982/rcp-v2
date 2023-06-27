import React, { Component } from 'react';
import seedColors from './seedColors';


class PalletteList extends Component {
  static defaultProps = {
    colors: seedColors,
  }
  constructor(props) {
    super(props);
    this.state = {
      colors: seedColors,
    }
  }
  render() {
    const { pallettes } = this.props;
    return (
      <div>
        <h1>Rect Colors Project v1</h1>
        {pallettes.map(pallette => (
          <div>
            <a href={`/palette/${pallette.id}`} style={{ textDecoration: "none", color: "#1a1a1a" }}>
              <h1>{pallette.paletteName} {pallette.emoji}</h1>
            </a>
          </div>
        ) )}
      </div>
    );
  }
}

export default PalletteList;
