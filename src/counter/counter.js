import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Counter = ({telCount, id, min, max}) => {
  // console.log(telCount(102,5))

  const [count, setCount] = useState(min);
  console.log(count)

  const increase = () => {
    set(count + 1);
  };

  const decrease = () => {
    set(count - 1);
  };

  const inputCounter = e => {
    let count = parseInt(e.target.value);
    if (!count) {
      return set(count);
    }
      
  };

  const set = newCount => {
    let count = Math.min(Math.max(newCount, min), max);
    setCount(count);
  };

  return (
    <div>
      <button onClick={decrease}>-</button>
      <input type="text" value={count} onChange={inputCounter} />
      <button onClick={increase}>+</button>
      {/* <button onClick={count => telCount(id, count)}>test</button> */}
    </div>
  );
};

export default Counter;

Counter.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  // count:PropTypes.number.isRequired
};
