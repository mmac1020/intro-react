import React, { Component } from 'react';
import Topping from './Topping';

class ToppingList extends Component {
  constructor() {
    super();
    this.state = {
      highlightedTopping: 'Cheese',
    };
    this.selection = this.selection.bind(this);
  }

  selection(fav) {
    this.setState({ highlightedTopping: fav });
  }

  render() {
    const toppingName = ['Cheese', 'Anchovies', 'Broccoli'];
    return (
      <div>
        <h1 className='header'>
          {' '}
          Your Favorite Topping is: {this.state.highlightedTopping}{' '}
        </h1>
        <Topping
          toppings={toppingName}
          highlightedTopping={this.state.highlightedTopping}
          selector={this.selection}
        ></Topping>
      </div>
    );
  }
}

export default ToppingList;
