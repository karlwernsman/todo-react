import { checkError, client } from './client.js';

export async function getListTodos() {
  const response = await client.from('todos').select();
  return checkError(response);
}

export async function createListTodo(description) {
  const response = await client.from('todos').insert([{ description }]).single();
  return checkError(response);
}
