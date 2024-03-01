import { useState } from "react";
import type { RootState } from "../../store/index";
import { useSelector, useDispatch } from "react-redux";
import { addList } from "../../store/slices/listSlice";

import ListItem from "./ListItem";
import Button from "../UI/Button";

const List = () => {
  const list = useSelector((state: RootState) => state.list.list);
  const dispatch = useDispatch();
  console.log("🐥 All list", list);

  const [input, setInput] = useState("");

  const handleAddList = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addList(input));
    setInput("");
  };

  return (
    <>
      <form
        className="flex justify-between items-center my-6"
        onSubmit={handleAddList}
      >
        <input
          className="w-full px-2 py-1 border border-slate-300 rounded-md placeholder-slate-400 focus:outline-none focus:border-sky-500"
          type="text"
          value={input}
          placeholder="할일을 입력해 주세요."
          onChange={e => setInput(e.target.value)}
          required
        />
        <Button type="submit" text="Add" />
      </form>
      <ul className="text-left">
        {list.length
          ? list.map(list => <ListItem list={list} key={list.id} />)
          : null}
      </ul>
    </>
  );
};

export default List;
