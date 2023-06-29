import chroma from 'chroma-js';
import Home from './Home';
import SingleColor from './SingleColor';
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePallette(starterPallette) {
  const url = window.location.pathname;
  if (url === '/' || url === '') {
    return <Home />;
  } else if (url === '/palette/:paletteId/:colorId') {
    return <SingleColor />
  }
  let newPallette = {
    palletteName: starterPallette.palletteName,
    id: starterPallette.id,
    emoji: starterPallette.emoji,
    colors: {}
  }
  for (let level of levels) {
    newPallette.colors[level] = [];
  }
  for (let color of starterPallette.colors) {
    let scale = getScale(color.color, 10).reverse();
    for (let i in scale) {
      newPallette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, '-'),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css().replace("rgb", "rgba").replace(")", ",1.0)")
      })
    }
  }
  return newPallette;
}

function getRange(hexColor) {
  const endColor = "#fff";
  return [
    chroma(hexColor).darken(1.4).hex(),
    hexColor,
    endColor,
  ]
}

function getScale(hexColor, numberOfColors) {
  return chroma
    .scale(getRange(hexColor))
    .mode("lab")
    .colors(numberOfColors)
}

export { generatePallette };