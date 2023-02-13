import { checkError, client } from './client.js';

export async function getListTodos() {
  const response = await client.from('todos').select();
  return checkError(response);
}

export async function createListTodo(description, complete) {
  const response = await client.from('todos').insert([{ description, complete }]).single();
  return checkError(response);
}

export async function toggleTodoItem({ id, complete }) {
  const response = await client
    .from('todos')
    .update({ complete: !complete })
    .match({ id })
    .single();

  return checkError(response);
}
export async function deleteCompleteItems() {
  const response = await client.from('todos').delete().match({ complete: true });

  return checkError(response);
}
export async function deleteItem(id) {
  const response = await client.from('todos').delete().match({ id });

  return checkError(response);
}
