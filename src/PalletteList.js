import React, { Component } from 'react';
import seedColors from './seedColors';
import MiniPallette from './MiniPallette';
import { withStyles } from '@mui/styles';

const styles = {
  root: {
    backgroundImage: "url(https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "55%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "#f1f1f1",
  },
  pallettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,32%)",
    gridGap: "2%",
  }
}

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
    const { pallettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors Project v1</h1>
          </nav>
          <div className={classes.pallettes}>
            {pallettes.map(pallette => (
              <a href={`/palette/${pallette.id}`} style={{ textDecoration: "none", color: "#1a1a1a" }}>
              <MiniPallette {...pallette} />
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PalletteList);
