import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import TodosForm from './TodosForm.js';
import TodosList from './TodosList.js';
import './Todos.css';
import { deleteCompleteItems, getListTodos } from '../../services/todos.js';
import { useTodosContext } from '../../context/TodosContext.js';

export default function Todos() {
  const { setTodos } = useTodosContext();
  const handleDeleteCompleted = async () => {
    try {
      deleteCompleteItems();
      const getTodos = await getListTodos();
      setTodos(getTodos);
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
        <button onClick={handleDeleteCompleted} className="clearCompletedButton">
          Clear completed todos
        </button>
      </div>
    </div>
  );
}
