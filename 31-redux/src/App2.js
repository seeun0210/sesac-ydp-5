import { useState } from 'react';
import './styles/Box.css';
import { useSelector, useDispatch } from 'react-redux';

function App2() {
  // [before]
  // const [number, setNumber] = useState(100);
  // const plus = () => setNumber(number + 1);
  // const minus = () => setNumber(number - 1);
  // [after]
  const number = useSelector((state) => state.number);
  return (
    <div className="App">
      <h1>React Redux Ex</h1>
      <h2>number:{number}</h2>
      <Box1 />
    </div>
  );
}
const Box1 = () => {
  const number = useSelector((state) => state.number);
  return (
    <div className="Box">
      <h2>Box1:{number}</h2>
      <Box2 />
    </div>
  );
};
const Box2 = () => {
  const number = useSelector((state) => state.number);
  return (
    <div className="Box">
      <h2>Box2:{number}</h2>
      <Box3 />
    </div>
  );
};
const Box3 = () => {
  const number = useSelector((state) => state.number);
  return (
    <div className="Box">
      <h2>Box3:{number}</h2>
      <Box4 />
    </div>
  );
};
const Box4 = () => {
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <div className="Box">
      <h2>Box4:{number}</h2>
      <button onClick={() => dispatch({ type: 'PLUS' })}>plus</button>
      <button onClick={() => dispatch({ type: 'MINUS' })}>minus</button>
    </div>
  );
};
export default App2;
