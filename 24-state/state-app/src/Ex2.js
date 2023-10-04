import { useState } from 'react';
const Ex2 = (props) => {
  const [number, setNumber] = useState(0);
  const Increase = () => {
    setNumber(number + 1);
  };
  const Decrease = () => {
    setNumber(number - 2);
  };
  const { value1, value2 } = props;

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={Increase}>{value1}</button>

      <button onClick={Decrease}>{value2}</button>
    </div>
  );
};
export default Ex2;
