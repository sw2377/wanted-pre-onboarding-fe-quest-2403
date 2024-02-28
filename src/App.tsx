import List from "./components/List/List";

const dummyList: {
  id: number;
  text: string;
}[] = [
  { id: 1, text: "list1" },
  { id: 2, text: "list2" },
  { id: 3, text: "list3" },
]

const App = () => {

  return (
    <div>
      <h2>React Todo List</h2>
      <List list={dummyList} />
    </div>
  )
}

export default App
