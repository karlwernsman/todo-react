import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import TodosForm from './TodosForm.js';
import TodosList from './TodosList.js';
import './Todos.css';
import { useTodosContext } from '../../context/TodosContext.js';

export default function Todos() {
  const { todos, setTodos } = useTodosContext();
  // const handleClearCompleted = async () => {
  //   try {
  //     setTodos();
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // };
  const handleClearAll = async () => {
    try {
      let todos = [];
      setTodos(todos);
    } catch (e) {
      console.error(e.message);
    }
  };
  const { user } = useUser();

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return (
    <div className="mainContainer">
      <div className="todoContainer">
        <TodosForm />
        <TodosList />
        <button>Clear completed todos</button>
        <button onClick={handleClearAll}>Clear ALL todos</button>
      </div>
    </div>
  );
}
