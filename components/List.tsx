import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  MouseEvent,
  FormEvent,
  ChangeEvent
} from "react";
import Labels, { labels } from "./Labels";
import {
  State,
  TodoItem,
  fetchTodos,
  genId,
  save
} from "../modules/TodoStorage";
import Form from "./Form";

const List = () => {
  const [current, setCurrent] = useState(State.All);

  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    setTodos(fetchTodos());
  }, [fetchTodos, setTodos]);

  const filterd = useMemo(
    () =>
      todos.filter(todo =>
        current === State.All ? true : todo.state === current
      ),
    [todos]
  );

  const toggleState = (todo: TodoItem) => {
    todo.state = todo.state === State.Working ? State.Done : State.Working;
    setTodos([...todos]);
  };

  const removeTodo = useCallback(
    (ev: MouseEvent, todo: TodoItem) => {
      if (ev.ctrlKey) {
        const idx = todos.findIndex(t => t.id === todo.id);
        const copy = [...todos];
        copy.splice(idx, 1);
        setTodos(copy);
      }
    },
    [todos, setTodos]
  );

  const [name, setName] = useState("");

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      setName(ev.target.value);
    },
    [setName]
  );

  const addTodo = useCallback(
    (ev: FormEvent, name: string) => {
      ev.preventDefault();
      setTodos(
        todos.concat([
          {
            id: genId(),
            name,
            state: State.Working
          }
        ])
      );
      setName("");
    },
    [todos, setTodos, setName]
  );

  useEffect(() => {
    save(todos);
  }, [todos]);

  return (
    <>
      <Labels current={current} />
      {filterd.length} 件を表示中
      <table>
        <thead>
          <tr>
            <th className="id">ID</th>
            <th className="comment">コメント</th>
            <th className="state">状態</th>
            <th className="button">-</th>
          </tr>
        </thead>
        <tbody>
          {filterd.map(todo => (
            <tr key={todo.id}>
              <th>{todo.id}</th>
              <td>{todo.name}</td>
              <td className="state" onClick={() => toggleState(todo)}>
                <button>{labels.get(todo.state)}</button>
              </td>
              <td className="button">
                <button onClick={ev => removeTodo(ev, todo)}>削除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>※削除ボタンはコントロールキーを押しながらクリックして下さい</p>
      <Form
        name={name}
        onSubmit={ev => addTodo(ev, name)}
        onChange={ev => onChange(ev)}
      />
    </>
  );
};

export default List;
