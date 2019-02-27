import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import RootRouter from 'routers/RootRouter'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <RootRouter user={{}} />
      </HashRouter>
    );
  }
}

export default App;
