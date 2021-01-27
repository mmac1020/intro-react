import React from 'react';

const Topping = (props) => {
  console.log(props);

  return (
    <ul>
      {props.toppings.map((topping, index) => {
        return (
          <li
            key={index}
            className={topping === props.highlightedTopping ? 'selected' : ''}
            onClick={() => props.selector(topping)}
          >
            {topping}
          </li>
        );
      })}
    </ul>
  );
};

export default Topping;
