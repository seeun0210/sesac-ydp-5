import PropTypes from 'prop-types';
import React, { Component } from 'react';

class TestComponent extends Component {
  name = 'SeEun';
  my_style = {
    backgroundColor: 'blue',
    color: 'orange',
    fontSize: '40px',
    padding: '12',
  };
  render() {
    return <div style={this.my_style}>{this.name}</div>;
  }
}
export default TestComponent;
