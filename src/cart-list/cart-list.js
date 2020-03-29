import React from 'react';
import './cart-list.css';
import {CartListItem} from '../cart-list-item';

const CartList = ({products, telCount}) => {
  return (
    <div className="cartList">
      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>Title</td>
            <td>Price</td>
            <td>Count</td>
            <td>Total</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {products.map((phone, idx) => {
            return (
              <CartListItem
                phone={phone}
                key={idx}
                idx={idx}
                telCount={telCount}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CartList;
