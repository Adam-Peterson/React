import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      'counter': 2,
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React Today!</h1>
          <h2>Your name is {this.props.name}</h2>
          <h2>The counter is at {this.state.counter}</h2>
          <button onClick={
            (e) => {
              this.setState((state, props) => {
                  return {
                    counter: state.counter * 10000
                  }
              })
            }
          }>Increment Counter</button>
          <p>
            Edit <code>src/App.js</code> filler.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
