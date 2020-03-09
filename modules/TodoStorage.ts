export enum State {
  All,
  Working,
  Done
}

export type TodoItem = {
  id: string;
  name: string;
  state: State.Working | State.Done;
};

const STORAGE_KEY = "next-ts-todoapp";

export const fetchTodos = () => {
  const todos = JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "[]"
  ) as TodoItem[];
  return todos.map((todo, idx) => ({ ...todo }));
};

export const genId = () => Math.floor(100000 * Math.random()).toString(16);

export const save = (todos: TodoItem[]) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
