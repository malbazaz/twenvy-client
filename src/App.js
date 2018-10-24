import React, { Component } from 'react';
import './App.css';
import {Campaign} from './containers/Campaigns'
import {Product} from './containers/Products'


class App extends Component {
  render() {
    return (
      <div className="App">
        App Container
        <Product />
        <Campaign />

      </div>
    );
  }
}

export default App;
