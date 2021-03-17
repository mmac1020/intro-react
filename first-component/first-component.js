import React from 'react';
import ReactDOM from 'react-dom';

// Class Component
// Components in react are what allows us to interact with the DOM (plus later on we will do some backend interactions as well)
class App extends React.Component {
  constructor() {
    // Setting up the things in the "Parent" class (React.Component) for us to use.
    super();
    // Allowed to initialize state in the constructor ONLY
    this.state = {
      message: 'I like Pokemon',
      otherMessage: 'I like burgers'
    }
    // Give me a method that does the same thing as modifyFirstMessage but with the "this" context I give
    this.modifyFirstMessage = this.modifyFirstMessage.bind(this);
  }

  modifyFirstMessage() {
    this.setState(
      {
        message: 'I enjoy green (st patrick\'s <3)',
      }
    )
  }

  // Painting the html onto the DOM
  render() {
    // Curly braces signal to REACT that this code is from the component
    return (
      <div>
        <h1>This is my first component</h1>
        <p> {this.state.message} </p>
        <p> {this.state.otherMessage} </p>
        <button onClick={this.modifyFirstMessage}>
          Click this button to change my first message
        </button>
      </div>
    )
  }
}
// This links our React components to the DOM
// First parameter is our Component we want to render
// Second parameter is the DOM element we want to replace
ReactDOM.render(<App />, document.getElementById('app'))
