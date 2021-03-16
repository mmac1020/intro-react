import React from 'react';

// class component
// class Topping extends React.Component {
//   constructor(props) {

//   }
// }

// functional component
const Topping = (props) => {
  /**
   * {
   *  topping: 'Cheese',
   *  quantity: '10',
   *  crispy: 'yes',
   *  delicious: 'definitely'
   * }
   */
  console.log(props);
  return (
    <li>
      Here is your topping: {props.topping}. With Quantity: {props.quantity} and
      if it is crispy {props.crispy}
    </li>
  );
};

export default Topping;
