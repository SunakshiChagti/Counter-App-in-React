import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter : 0
  }
  IncrementHandler = () => {
    this.setState ({
      ...this.state,
      counter : this.state.counter + 1
    })
  }
  DecrementHandler = () => {
    this.setState ({
      ...this.state,
      counter : this.state.counter - 1
    })
  }
  render() {
    return (
      <div className="App">
      <button onClick={this.IncrementHandler}>Increment</button>
      <button onClick={this.DecrementHandler}>Decrement</button>
      <h1>{this.state.counter}</h1>
      </div>
    );
  }
}

export default App;
