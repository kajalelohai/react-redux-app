import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { value: state.value };
};

class Button extends React.Component {
  render() {
    return (
      <div className="wrap-button">
        <button
          className="button button-inc"
          onClick={() => this.props.dispatch({ type: 'INCREMENT' })}
        >
          +
        </button>
        <button
          className="button button-dec"
          onClick={() => this.props.dispatch({ type: 'DECREMENT' })}
        >
          -
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Button);
