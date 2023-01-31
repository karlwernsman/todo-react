import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import TodosForm from './TodosForm.js';
import TodosList from './TodosList.js';

export default function Todos() {
  const { user } = useUser();

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return (
    <div>
      <TodosList />
      <TodosForm />
    </div>
  );
}
