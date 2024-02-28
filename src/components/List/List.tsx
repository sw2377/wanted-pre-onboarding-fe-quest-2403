import { useState } from "react";

import ListItem from "./ListItem";
import Button from "../UI/Button";

interface ListItem {
  id: number;
  text: string;
}

const List = ({ list }: { list: ListItem[] }) => {
  const [input, setInput] = useState("");

  const handleAddList = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("🚀 ADD LIST");

    setInput("");
  }

  return (
    <>
      <form onSubmit={handleAddList} >
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <Button type="submit" text="Add" />
      </form>
      <ul>
        { list.length ? list.map(list => <ListItem listItem={list.text} key={list.id} />) : null }
      </ul>
    </>
  )
}

export default List