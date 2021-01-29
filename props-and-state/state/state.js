import React from 'react';
import ReactDOM from 'react-dom';
import Topping from './components/Topping';

// A Class Component (woaaaaaaah)
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
    return (
      <div>
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

ReactDOM.render(<ToppingsList />, document.getElementById('app'));
