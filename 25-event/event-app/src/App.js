// import logo from './logo.svg';
import './App.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import Counter from './Counter';
import Ex from './EX';
import ChangeStrColor from './Ex2';
import ChangeStr from './Ex3';
function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr></hr>
      <ClassBind />
      <hr></hr>
      <Counter />
      <hr></hr>
      <Ex />
      <hr></hr>
      <ChangeStrColor />
      <hr></hr>
      <ChangeStr />
    </div>
  );
}

export default App;
