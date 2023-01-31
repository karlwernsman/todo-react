import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import TodosForm from './TodosForm.js';
import TodosList from './TodosList.js';
import './Todos.css';

export default function Todos() {
  //   const handleClear = async () => {
  //     try {
  // delete
  //     } catch (e) {
  //       console.error(e.message);
  //     }
  //   };
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
      </div>
    </div>
  );
}
