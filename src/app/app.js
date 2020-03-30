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

  

  changeCnt = (id, count) => {
    let products = [...this.state.products];
    products[id] = {...products[id],count:count};
    this.setState({products});
    console.log(id,count)
  };

  render() {
    const {products:{id}}=this.state
    
    return (
      <div>
        <CartListContainer
          products={this.state.products}
          telCount={(count)=>this.changeCnt(id,count)}
        />
      </div>
    );
  }
}
