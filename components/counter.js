import React, { Component } from "react";
import { connect } from "react-redux";
import {
  incrementCount,
  decrementCount,
  resetCount
} from "../redux-store/actions";

class Counter extends Component {
  increment = () => {
    const { onIncrementCount } = this.props;
    onIncrementCount();
  };

  decrement = () => {
    const { onDecrementCount } = this.props;
    onDecrementCount();
  };

  reset = () => {
    const { onResetCount } = this.props;
    onResetCount();
  };

  render() {
    const { count } = this.props;
    return (
      <div>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // const { count } = state;
  // return { count };
  return { count: state.updateCounterReducer.count }; // this is the same
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCount: () => dispatch(incrementCount()),
    onDecrementCount: () => dispatch(decrementCount()),
    onResetCount: () => dispatch(resetCount())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
