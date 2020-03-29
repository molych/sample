import React from 'react';
import {Counter} from '../counter'

const CartLIstItem = ({phone,idx}) => {
  const {title, price, rest,current} = phone;

  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{title}</td>
      <td>{price}</td>
      <td>
        <Counter min={1} max={rest} cnt={current}/>
      </td>
      <td>total</td>
      <td><button>Del</button></td>
    </tr>
  );
};

export default CartLIstItem;
