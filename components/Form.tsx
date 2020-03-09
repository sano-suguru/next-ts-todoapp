import { FC, useState, FormEvent, ChangeEvent } from "react";

type Props = {
  onSubmit: (ev: FormEvent) => void;
  name: string;
  onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
};
const Form: FC<Props> = ({ name, onSubmit, onChange }) => {
  return (
    <form className="add-item" onSubmit={onSubmit}>
      {"コメント"}
      <input type="text" value={name} onChange={onChange} />
      <button type="submit">追加</button>
    </form>
  );
};

export default Form;
