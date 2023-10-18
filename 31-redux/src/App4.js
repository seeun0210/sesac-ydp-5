import { useState } from 'react';
import './styles/Box.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box1Container,
  Box2Container,
  Box3Container,
  Box4Container,
} from './containers/BoxesContainer';

function App4() {
  // [before]
  // const [number, setNumber] = useState(100);
  // const plus = () => setNumber(number + 1);
  // const minus = () => setNumber(number - 1);
  // [after]
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="App">
      <h1>React Redux Ex</h1>
      <h2>number:{number}</h2>
      <Box1Container />
    </div>
  );
}
export const Box1 = () => {
  // const number = useSelector((state) => state.number);
  return (
    <div className="Box">
      <h2>Box1:</h2>
      <Box2Container />
    </div>
  );
};
export const Box2 = () => {
  // const number = useSelector((state) => state.number);
  return (
    <div className="Box">
      <h2>Box2:</h2>
      <Box3Container />
    </div>
  );
};
export const Box3 = () => {
  // const number = useSelector((state) => state.number);
  return (
    <div className="Box">
      <h2>Box3:</h2>
      <Box4Container />
    </div>
  );
};
export const Box4 = ({ number, onPlus, onMinus, onChange, isVisible }) => {
  // const number = useSelector((state) => state.counter.number);
  // const isVisible = useSelector((state) => state.isVisible);
  // // 루트에서 counter로 묶어서 보냈기 때문에 이전에 state.number가 아니라 state.counter.number가 되어야 접근 가능함
  // const dispatch = useDispatch();
  return (
    <div className="Box">
      <h2>Box4:{number}</h2>
      <h2>isVisible값은?? {isVisible ? 'true' : 'false'}</h2>
      <button onClick={onPlus}>plus</button>
      <button onClick={onMinus}>minus</button>
      <button onClick={onChange}>change</button>
    </div>
  );
};
export default App4;
