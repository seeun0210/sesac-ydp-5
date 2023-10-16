import CircleComponent from './CircleComponent';
import CssModuleComponents from './CssModuleComponents';
import ImagesComponent from './ImagesComponent';
import Lava from './Lava';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>React Styling CSS</h1>
      <h2>Css Module</h2>
      <CssModuleComponents />
      <h2>SASS Module</h2>
      <SassComponent />
      <h2>styled-components</h2>
      <StyledComponent />
      <h2>애벌레 실습</h2>
      <Lava />
      <br></br>
      <br></br>
      <br></br>
      <h2>원 애니메이션 실습</h2>
      <CircleComponent />
      <h2>이미지 반응형</h2>
      <ImagesComponent />
    </div>
  );
}

export default App;
