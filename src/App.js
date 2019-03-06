import React, { Component } from 'react'
import './App.css'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../src/ducks/store'
import routes from './Routes/Routes'
// import Private from './components/Private/'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>

          <div className="App">{routes}</div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App
