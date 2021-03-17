import React from 'react';
import ReactDOM from 'react-dom';
import Anchovies from './components/Anchovies'
import Cheese from './components/Cheese';
import Pineapple from './components/Pineapple';
import Topping from './components/Topping';

class ToppingsList extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteTopping: 'cheese'
    }
    this.selectTopping = this.selectTopping.bind(this);
  }

  selectTopping(topping) {
    this.setState(
      {
        favoriteTopping: topping
      }
    )
  }

  render () {
    return (
      <div>
        <h1> Your favorite topping is: {this.state.favoriteTopping}</h1>
        <Topping
          selectTopping={this.selectTopping}
          favoriteTopping={this.state.favoriteTopping}
          topping='cheese'
        />
        <Topping
          selectTopping={this.selectTopping}
          favoriteTopping={this.state.favoriteTopping}
          topping='pepperoni'
        />
        <Topping
          favoriteTopping={this.state.favoriteTopping}
          selectTopping={this.selectTopping}
          topping='pineapple'
        />
      </div>
    );
  }
}
// This is like
// <Topping topping='cheese' />; //
// this
// Topping({topping: cheese})

ReactDOM.render(<ToppingsList />, document.getElementById('app'));
