import React, { Component } from 'react';
import Search from './Search';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
          <AppBar
            title="Search Movies!"
            showMenuIconButton={false}
            className="app-title"
          />
          <Search />
      </div>
    );
  }
}

export default App;
