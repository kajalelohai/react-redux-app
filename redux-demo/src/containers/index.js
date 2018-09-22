import React from 'react';
// import Button from './button.js';
import { connect } from 'react-redux';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1 className="heading"> INCREMENT/DECREMENT</h1>
        <h2 className="display-value"> {this.props.value} </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { value: state.value };
};

export default connect(mapStateToProps)(Main);
