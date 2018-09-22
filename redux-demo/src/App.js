import React, { Component } from 'react';
import store from './store/index.js';
import { incrementValue } from './actions/index.js';
import Main from './containers';
import Button from './components/Button';
import './App.css';

class App extends Component {
  render() {
    console.log(store.getState());
    return (
      <div className="App">
        <Main />
        <Button />
      </div>
    );
  }
}
window.store = store;
window.val = incrementValue;
export default App;
