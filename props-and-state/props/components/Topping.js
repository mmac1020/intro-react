import React from 'react';

const Topping = (props) => {
  console.log('props');
  console.log(props);
  const isSelected = props.favoriteTopping === props.topping;
  const toppingClass = isSelected ? 'favorite' : ''
  return (
    <div className={toppingClass}>
      <h1>I am a single topping!!!</h1>
      <div>{props.topping}</div>
      <button onClick={() => {props.selectTopping(props.topping)}}>I want to be the favorite!</button>
    </div>
  );
}

export default Topping

// const app = document.getElementById('app')

// app.addEventListener('click', () => {
//   props.selectedTopping(someProperty);
// })
