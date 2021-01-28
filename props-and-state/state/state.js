import React from 'react';
import ReactDOM from 'react-dom';
import Topping from './components/Topping';

// A Functional Component (woaaaaaaah)
class ToppingsList extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTopping: 'Cheese',
    };
    this.selectTopping = this.selectTopping.bind(this);
  }

  selectTopping(topping) {
    this.setState({
      selectedTopping: topping,
    });
  }

  render() {
    const toppingIWant = this.state.selectedTopping;
    return (
      <div>
        <Topping
          selectedTopping={toppingIWant}
          topping='Cheese'
          selectTopping={this.selectTopping}
        />
        <Topping
          selectedTopping={toppingIWant}
          topping='Sausage'
          selectTopping={this.selectTopping}
        />
        <Topping
          selectedTopping={toppingIWant}
          topping='Pineapple'
          selectTopping={this.selectTopping}
        />
        {/* <Anchovies /> */}
      </div>
    );
  }
}

ReactDOM.render(<ToppingsList />, document.getElementById('app'));
