import React, { Component } from 'react';
class Counter extends Component {
  // 기존버전
  //   constructor(props) {
  //     // js에서 'super'는 부모클래스 생성자의 참조
  //     // super() 호출 시 현재 클래스가 상속받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출
  //     super(props);

  //     this.state = {
  //       number: 0,
  //     };
  //   }
  //현재버전
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state;
    return (
      <div>
        {/* <h1>{this.state.number}</h1> */}
        <h1>{number}</h1>
        <button
          onClick={() => {
            // 직접 변경 불가능, setState사용해야 함
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
        <button onClick={() => alert(number)}>Alert Number</button>
      </div>
    );
  }
}
export default Counter;
