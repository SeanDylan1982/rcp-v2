import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom';
import seedColors from './seedColors';
import Pallette from './Pallette';
import './App.css';
import { generatePallette } from './ColorHelpers';
import Home from './Home';
// import SingleColor from './SingleColor';

class App extends Component {
  static defaultProps = {
    colors: seedColors,
  }
  constructor(props) {
    super(props);
    this.state = {}
  }
  findPallette(id) {
    return seedColors.find(function(pallette) {
      return pallette.id === id;
    })
  }
  render() {
    let url = window.location.pathname.slice(9);
    return (
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
            render={<Home />}
          />
          <Route 
          exact 
          path="/palette/:id" 
          element={<Pallette pallette={generatePallette(
              this.findPallette(url)
            )}/>}
          render={routeProps => (
          <Pallette 
            pallette={generatePallette(
              this.findPallette(url)
            )}
          />
          )}
          />
          {/* <Route
            path="/palette/:paletteId/:colorId"
            element={<SingleColor pallette={generatePallette(
              this.findPallette(url)
            )}/>}
            render={routeProps => (
            <SingleColor 
              pallette={generatePallette(
                this.findPallette(url)
              )}
            />
            )}
          />             */}
        </Routes>
      </div>
    );
  }
}

export default App;
