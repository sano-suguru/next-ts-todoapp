import { FC } from "react";
import { State } from "../modules/TodoStorage";

export const labels = new Map<State, string>([
  [State.All, "全て"],
  [State.Working, "作業中"],
  [State.Done, "完了"]
]);

type Props = {
  current: State;
};

const Labels: FC<Props> = ({ current }) => (
  <>
    {Array.from(labels).map(([state, text]) => (
      <label key={state}>
        <input
          type="radio"
          value={current}
          defaultChecked={state === current}
        />
        {text}
      </label>
    ))}
  </>
);

export default Labels;
