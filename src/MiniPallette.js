import React from 'react'
import { withStyles } from '@mui/styles';

const styles = {
  root: {
    position: "relative",
    display: "block",
    backgroundColor: "#f1f1f1",
    color: "1a1a1a",
    border: "1px solid teal",
    borderRadius: "10px",
    padding: "0.5rem",
    margin: "0 0.5rem",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    }
  },
  colors: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#f1f1f1",
    height: "130px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    position: "relative",
    display: "flex",
    justifyContent: "spaces-between",
    alignItems: "center",
    margin: "0",
    color: "#1a1a1a",
    fontSize: "0.8rem",
    fontWeight: "600",
    paddingTop: "0.5rem",
    width: "100%",
    "& span": {
      position: "relative",
      display: "flex",
      justifyContent: "flex-end",
    }
  },
  emoji: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    marginLeft: "2rem",
    fontSize: "1.3rem",
  },
  miniColor: {
    width: "20%",
    height: "25%",
    display: "flex",
    flexWrap: "wrap",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px",
  }
}

function MiniPallette(props) {
  const { classes, paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}>
    </div>
  ))
  return (
    <div className={classes.root}>
      <div className={classes.colors}>
        {miniColorBoxes}
      </div>
      <h5 className={classes.title}>{paletteName}<span className={classes.emoji}>{ emoji }</span></h5>
      
    </div>
  )
}
export default withStyles(styles)(MiniPallette);