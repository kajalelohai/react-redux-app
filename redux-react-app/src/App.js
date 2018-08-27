import React, { Component } from 'react';
import Welcome from './components/welcome/Welcome';
import { store } from './store';
import ButtonGroup from './components/button-group/Button-Group';

class App extends Component {
  render() {
    return [
      <Welcome key={1} tech={store.getState().tech} />,
      <ButtonGroup key={2} technologies={['Redux', 'Elm', 'React']} />
    ];
  }
}

export default App;
