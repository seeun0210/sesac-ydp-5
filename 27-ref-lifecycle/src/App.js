import RefSample1 from './RefSample1';
import RefSample2 from './RefSample2';
import RefSample3 from './RefSample3';
import RefSample4 from './RefSample4';
import Ex1 from './Ex1';
import LifeCycleFunc from './LifeCycleFunc';
import LifeCycleClass from './LifeCycleClass';
import PostList from './ex/PostList';
function App() {
  return (
    <div className="App">
      {/* 함수형 컴포넌트; useRef()로 DOM요소에 직접 접근 */}
      <RefSample1 />
      <hr />
      {/* 함수형 컴포넌트; useRef()로 로컨변수 사용 */}
      <RefSample2 />
      <hr />
      {/* 클래스형 컴포넌트;ref 사용방법 1.콜백함수 */}
      <RefSample3 />
      <hr />
      {/* 클래스형 컴포넌트;ref 사용방법 2.createRef()메서드 사용 */}
      <RefSample4 />
      <hr />
      {/* 실습 */}
      <Ex1 />
      <hr />
      {/* 10/06 lifecycle 수업*/}
      <LifeCycleFunc />
      <hr />
      {/* 10/06 lifecycle 수업*/}
      <LifeCycleClass />
      <hr />
      {/* 10/06 lifecycle 실습*/}
      <PostList />
    </div>
  );
}

export default App;
