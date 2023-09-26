import logo from './logo.svg';
import './App.css';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import Button from './Button.js';
import TestComponent from './Test';
import Test2Component from './Test2';
import React from 'react';
import PropsEx1 from './Ex.js';
import Props from './Ex2.js';
import Props_ex3 from './Ex3';
function App() {
  function my_func() {
    console.log('콘솔띄우기 성공!');
  }
  return (
    <div className="App">
      <FunctionComponent name="영등포 새싹" />
      <FunctionComponent />
      {/* name 값이 없으면 defaultProps에 의해서 홍길동이 들어가게된다 */}
      <FunctionComponent name={true} />
      <hr />
      <ClassComponent name="새싹" />
      <ClassComponent />
      <ClassComponent name={true} />
      <hr></hr>
      <Button link="https://www.google.com">Google</Button>
      <hr />
      <TestComponent />
      <Test2Component />
      <hr />
      <PropsEx1 />
      <Props
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13500"
        type="자기계발서"
      ></Props>
      <div>
        <Props_ex3
          text="App 컴포넌트에서 넘겨준 text props입니다."
          valid={my_func}
        />
      </div>
    </div>
  );
}

export default App;
