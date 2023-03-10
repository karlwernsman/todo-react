import React, { useState } from 'react';
import { useTodosContext } from '../../context/TodosContext.js';
import { createListTodo } from '../../services/todos.js';

export default function TodosForm() {
  const [description, setDescription] = useState('');
  const [complete, setComplete] = useState(false);
  const { setTodos } = useTodosContext();

  const handleNewTodo = async () => {
    try {
      const todo = await createListTodo(description, complete);
      setTodos((previous) => [...previous, todo]);
      setDescription('');
      setComplete(false);
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={description}
        placeholder="new todo"
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button onClick={handleNewTodo}>Add todo</button>
    </div>
  );
}
