import React from 'react';
import ReactDOM from 'react-dom';
import ToppingList from './components/ToppingList';

import './style.css';

const PizzaToppings = () => {
  return <ToppingList></ToppingList>;
};

ReactDOM.render(<PizzaToppings />, document.getElementById('app'));
