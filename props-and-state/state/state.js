import React from 'react';
import ReactDOM from 'react-dom';
import Topping from './components/Topping';
// This is fine
// const Topping = (props) => {

// }
// A Class Component (woaaaaaaah)
class ToppingsList extends React.Component {
  constructor() {
    super();
    this.state = {
      parentClass: '',
      selectedTopping: 'Cheese',
    };
    this.selectTopping = this.selectTopping.bind(this);
  }

  selectTopping(topping) {
    console.log(`I am selecting ${topping} as a topping`);
    this.setState({
      selectedTopping: topping,
    });
  }

  render() {
    console.log('I am rendering now!');
    return (
      <div className={this.state.parentClass}>
        <Topping
          selectedTopping={this.state.selectedTopping}
          topping='Cheese'
          selectTopping={this.selectTopping}
        />
        <Topping
          selectedTopping={this.state.selectedTopping}
          topping='Sausage'
          selectTopping={this.selectTopping}
        />
        <Topping
          selectedTopping={this.state.selectedTopping}
          topping='Pineapple'
          selectTopping={this.selectTopping}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <ToppingsList addAProp='newProp' />,
  document.getElementById('app')
);
