import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super(); // Steals things from the mother class
    // Enables us to use functions and stuff from parent class
    // Define a state object
    this.state = {
      message: 'I really like pizza 🍕',
    };
    this.addSomething = this.addSomething.bind(this);
  }

  addSomething() {
    this.setState({
      message: 'I really like burgers 🍔',
    });
  }

  render() {
    return (
      <div>
        <h1>Here is my message</h1>
        <p>{this.state.message}</p>
        <button onClick={this.addSomething}>
          Click me to change the message
        </button>
      </div>
    );
  }
}

console.log(<App />);
ReactDOM.render(<App />, document.getElementById('app'));
