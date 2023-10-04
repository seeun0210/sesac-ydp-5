import logo from './logo.svg';
import Counter from './Counter';
import SayFunction from './SayFunction';
import CounterFunction from './CounterFunction';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <hr></hr>
      <SayFunction />
      <hr></hr>
      <CounterFunction value={'Plus 1'} />
      <hr></hr>
      <Ex1></Ex1>
      <hr></hr>
      <Ex2 value1={'증가'} value2={'감소'}></Ex2>
    </div>
  );
}

export default App;
