import React, { Component } from 'react';
import PropTypes from 'prop-types';
import coding from './grass.png';
// class ClassComponent extends React.Component {}
class Test2Component extends Component {
  style = {
    color: 'orange',
    fontSize: '40px',
    marginTop: '20',
  };
  // 클래스형 컴포넌트는 render함수 필수
  render() {
    return (
      <div>
        <h2>안녕하세요</h2>
        <img src={coding} />
      </div>
    );
  }
}

export default Test2Component;
