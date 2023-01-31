import { useTodosContext } from '../../context/TodosContext.js';
import { getListTodos, toggleTodoItem } from '../../services/todos.js';
import './TodoList.css';

export default function TodosList() {
  const { todos, setTodos } = useTodosContext();

  const handleComplete = async (todo) => {
    try {
      const updatedTodo = await toggleTodoItem(todo);
      setTodos((prevTodo) => (prevTodo.id === todo.id ? updatedTodo : prevTodo));
      const getTodos = await getListTodos();
      setTodos(getTodos);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <div onClick={() => handleComplete(todo)} className={`${todo.complete}`}>
            {todo.description}
          </div>
        </div>
      ))}
    </>
  );
}
