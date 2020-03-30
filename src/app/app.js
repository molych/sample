import React from 'react';
import {CartListContainer} from '../cart-list-container';
import './app.css';

export default class App extends React.Component {
  state = {
    products: [
      {
        id: 100,
        title: 'Iphone',
        price: 500,
        rest: 10,
        count: 1,
      },
      {
        id: 101,
        title: 'Sumsung',
        price: 400,
        rest: 5,
        count: 1,
      },
      {
        id: 102,
        title: 'Sony',
        price: 300,
        rest: 8,
        count: 1,
      },
    ],
  };

  

  changeCnt = (i, count) => {
    let products = [...this.state.products];
    products[i] = {...products[i],count:count};
    this.setState({products});
    console.log(i,count)
  };

  render() {
    return (
      <div>
        <CartListContainer
          products={this.state.products}
          telCount={this.changeCnt}
        />
      </div>
    );
  }
}
