import { checkError, client } from './client.js';

export async function getListTodos() {
  const response = await client.from('todos').select();
  return checkError(response);
}

export async function createListTodo(description, complete) {
  const response = await client.from('todos').insert([{ description, complete }]).single();
  return checkError(response);
}
