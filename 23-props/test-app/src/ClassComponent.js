import React, { Component } from 'react';
import PropTypes from 'prop-types';
// class ClassComponent extends React.Component {}
class ClassComponent extends Component {
  student = 'SeEun';
  // 클래스형 컴포넌트는 render함수 필수
  render() {
    const { name } = this.props;
    console.log('props:', this.props);
    return (
      <div>
        <h1>Hi {this.student}!</h1>
        <p>여기는 ClassComponent</p>
        <p>
          새로운 컴포넌트의 이름은 <b>{this.props.name}</b>
        </p>
        {/* 위의 코드와 같은 코드 (밑에껀 구조분해 적용한거)*/}
        <p>
          새로운 컴포넌트의 이름은 <b>{name}</b>
        </p>
      </div>
    );
  }
  //   static defaultProps = {
  //     name: '홍길동',
  //   };
  //   static propTypes = {
  //     name: PropTypes.string,
  //   };
}
ClassComponent.defaultProps = {
  name: '홍길동',
};
// default도 없어야 isRequired 동작함
ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
};
export default ClassComponent;
