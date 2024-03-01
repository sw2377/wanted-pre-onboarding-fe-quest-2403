import List from "./components/List/List";
import "./index.css";

const App = () => {
  return (
    <div className="mx-auto my-5 w-3/4 text-center">
      <h2 className="my-3 text-3xl font-bold">React Todo List</h2>
      <List />
    </div>
  );
};

export default App;
