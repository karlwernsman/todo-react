import { useTodosContext } from '../../context/TodosContext.js';
import { deleteItem, getListTodos, toggleTodoItem } from '../../services/todos.js';
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

  const handleDelete = async (id) => {
    try {
      deleteItem(id);
      const getTodos = await getListTodos();
      setTodos(getTodos);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div>
      {todos.map((todo) => (
        <ul key={todo.id} className="todo">
          <li onClick={() => handleComplete(todo)} className={`${todo.complete}`}>
            {todo.description}
          </li>
          <button onClick={() => handleDelete(todo.id)} className="trashButton">
            🗑
          </button>
        </ul>
      ))}
    </div>
  );
}
