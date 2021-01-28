import React from 'react';
import ReactDOM from 'react-dom';
// This is what call a "Class Component"
class App extends React.Component {
  constructor() {
    super(); // Steals stuff from the parent
    // This allows us to use functions like this.setStatus()
    // Also allows us to set a "state" object
    // This is not modification, this is initialization (which is ok)
    this.state = {
      message: 'I really like burgers',
    };
    // this.messWithState = this.messWithState.bind(this);
    this.notOneLine = this.messWithState.bind(this);
    this.notAnotherOneLine = this.anotherFunc.bind(this);
  }

  messWithState() {
    this.setState({
      message: 'I have now messed with the state',
    });
  }

  anotherFunc() {
    this.setState({
      message: 'I have created another function to mess with state',
    });
  }

  render() {
    return (
      <div>
        <div>Hello from React!!</div>
        <p>{this.state.message}</p>
        <button onClick={this.notOneLine}>Click here to mess with state</button>
        <button onClick={this.notAnotherOneLine}>
          Click here to also mess with state
        </button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
