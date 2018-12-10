import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Buttons from './Buttons';
import Display from './Display';



class App extends Component {
  constructor() {
    super()
    this.state = { operations: [] }
  }

  calculateOperations = () => {
    let result = this.state.operations.join('')
    if(result) {
      result = math.eval(result)
      result = math.format(result, { precision: 14 })
      result = String(result)
      this.setState({
        operations: [result],
      })
    }
  }
  
  render() {
    return (
      <div className="App">
         
      </div>
    );
  }
}

export default App;
