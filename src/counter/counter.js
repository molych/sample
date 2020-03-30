import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {
  static defaultProps = {
    telCount: function(count) {},
  };

  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    telCount: PropTypes.func,
  };

  increase = () => {
    this.set(this.props.count + 1);
  };

  decrease = () => {
    this.set(this.props.count - 1);
  };

  inputCounter = e => {
    let count = parseInt(e.target.value);
    if (!count) {
      return this.set(count);
    }
  };

  set = newCount => {
    let count = Math.min(Math.max(newCount, this.props.min), this.props.max);
    this.props.telCount(count);
  };

  render() {
    return (
      <div>
        <button onClick={this.decrease}>-</button>
        <input type="text" value={this.props.count} onChange={this.inputCounter} />
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}