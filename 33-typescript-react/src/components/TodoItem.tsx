import React from 'react';
import { ToDoItem } from '../types/types';
// {todo}=>{todo:{id,text,completed}}
interface Props {
  todo: ToDoItem;
  toggleComplete: (id: number) => void;
}
export default function TodoItem({ todo, toggleComplete }: Props) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        {todo.text}
      </label>
    </li>
  );
}
