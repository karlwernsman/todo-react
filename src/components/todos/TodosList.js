import React from 'react';
import { useTodosContext } from '../../context/TodosContext.js';

export default function TodosList() {
  const { todos } = useTodosContext();

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input type="checkbox" />
            {todo.description}
          </label>
        </div>
      ))}
    </>
  );
}
