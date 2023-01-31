import { createContext, useContext, useEffect, useState } from 'react';
import { getListTodos } from '../services/todos.js';

const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getListTodos();
        setTodos(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchTodos();
  }, []);
  return <TodosContext.Provider value={{ todos, setTodos }}>{children}</TodosContext.Provider>;
};

const useTodosContext = () => {
  const data = useContext(TodosContext);

  if (!data) {
    throw new Error('useTodosContext must be wrapped in a TodosProvider');
  }
  return data;
};

export { useTodosContext, TodosProvider };
