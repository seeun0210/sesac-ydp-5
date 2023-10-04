import React, { Component } from 'react';

export default class RefSample4 extends Component {
  // 컴포넌트 내부에서 변수에 React.createRef()를 담기
  inputRef = React.createRef();
  handleFocus = () => {
    console.log(this);
    //ref 설정 후, DOM접근을 위해서는 this.inputRef.current까지 접근
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <p>클래스형 컴로넌트에서 버튼 클릭시 input에 focusing처리</p>
        {/* ref props 사용해서 ref 설정 */}
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleFocus}>Focus</button>
      </div>
    );
  }
}
