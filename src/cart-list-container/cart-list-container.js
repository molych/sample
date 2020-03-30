import React from 'react';
import {CartList} from '../cart-list';

const CartListContainer = ({products, telCount}) => {
  return (
    <div>
      <CartList products={products} telCount={telCount} />;
    </div>
  );
};

export default CartListContainer;
