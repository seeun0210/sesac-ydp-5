import UseMemoEx from './components/UseMemoEx';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseReducerEx from './components/UseReducerEx';
import useTitle from './hooks/useTitle';
import Faq from './components/Faq';
import useToggle from './hooks/useToggle';
function App() {
  useTitle('React Hooks 연습중입니다.');
  return (
    <div className="App">
      <UseMemoEx />
      <hr />
      <UseCallbackEx />
      <hr />

      <UseCallbackEx2 postId={8} />
      <hr />

      <UseReducerEx />
      <hr />

      <Faq />
    </div>
  );
}

export default App;
