import React from 'react';

// class component
// class Topping extends React.Component {
//   constructor(props) {

//   }
// }

// functional component
const Topping = (props) => {
  if (props.topping === 'Cheese') {
    console.log(
      'The Cheese functional component has been called again (to render)'
    );
  }
  let renderedClass = '';
  if (props.selectedTopping === props.topping) {
    renderedClass = 'selected';
  }
  return (
    <div className='other-class'>
      <li className={renderedClass}>Here is your topping: {props.topping}</li>
      <button onClick={() => props.selectTopping(props.topping)}>
        Click me to change the selected topping
      </button>
    </div>
  );
};

export default Topping;
