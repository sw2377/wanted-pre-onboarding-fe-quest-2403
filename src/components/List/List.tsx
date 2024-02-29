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
  }

  return (
    <>
      <form onSubmit={handleAddList} >
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} required />
        <Button type="submit" text="Add" />
      </form>
      <ul>
        { list.length ? list.map(list => <ListItem list={list} key={list.id} />) : null }
      </ul>
    </>
  )
}

export default List