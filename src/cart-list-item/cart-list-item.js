import React from 'react';
import {Counter} from '../counter'

const CartLIstItem = ({
  phone,
  idx,
  telCount
}) => {
  const {id, title, price, rest, count} = phone;
  console.log(id);

  return (
    <tr key={id}>
      <td>{idx + 1}</td>
      <td>{title}</td>
      <td>{price}</td>
      <td>
        <Counter
          min={1}
          max={rest}
          count={count}
          telCount={telCount}
          id={id}
        />
      </td>
      <td>total</td>
      <td>
        <button>Del</button>
      </td>
    </tr>
  );
};

export default CartLIstItem;
