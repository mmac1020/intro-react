import React from 'react';

const Topping = (props) => {
  console.log(props);
  return <div>{`Topping: ${props.topping} | Amount: ${props.amount}`}</div>;
};

export default Topping;
