import React from 'react';
import ReactDOM from 'react-dom';
// import Anchovies from './components/Anchovies';
import Topping from './components/Topping';

// A Functional Component (woaaaaaaah)
const ToppingsList = () => {
  return (
    <div>
      <Topping topping='Cheese' quantity='10' crispy='yes' />
      <Topping topping='Sausage' />
      <Topping topping='Pineapple' />
      {/* <Anchovies /> */}
    </div>
  );
};

ReactDOM.render(<ToppingsList />, document.getElementById('app'));
