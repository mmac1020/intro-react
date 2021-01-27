import React from 'react';
import ReactDOM from 'react-dom';
// import Cheese from './components/Cheese';
// import Pepperoni from './components/Pepperoni';
// import Pineapple from './components/Pineapple';

import Topping from './components/Topping';

const PizzaToppings = () => {
  return (
    <div>
      <Topping amount='standard' topping='Cheese'></Topping>
      <Topping amount='triple' topping='Pepperoni' />
      <Topping amount='double' topping='Pineapple'></Topping>
    </div>
  );
};

ReactDOM.render(<PizzaToppings />, document.getElementById('app'));
