import React from 'react';
import Student from './components/Student';
import Card from './components/Card';
import TodoList from './components/TodoList';
function App() {
  const handleClick = (name: string, grade: number) => {
    console.log(`안녕 난 ${name}이고, ${grade}학년이야`);
  };
  return (
    <div className="App">
      <Student name="새싹" grade={3} handleClick={handleClick} />
      <br></br>
      <Student name="새싹" grade={3} part="CS" handleClick={handleClick} />
      <Card title="오늘 배울 것은?">
        <p>TypeScript with React</p>
        {/* p태그 안에 있는게 지금 children임! */}
      </Card>
      <TodoList />
    </div>
  );
}

export default App;
