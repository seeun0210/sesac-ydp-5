import CssModuleComponents from './CssModuleComponents';
import SassComponent from './SassComponent';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      App
      <h1>React Styling CSS</h1>
      <h2>Css Module</h2>
      <CssModuleComponents />
      <h2>SASS Module</h2>
      <SassComponent />
    </div>
  );
}

export default App;
