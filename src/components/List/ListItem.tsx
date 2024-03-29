import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { removeList, ListType } from "../../store/slices/listSlice";

const ListItem = ({ list }: { list: ListType }) => {
  const dispatch = useDispatch();

  const handleRemoveList = (targetId: string) => {
    dispatch(removeList(targetId));
  };

  return (
    <li className="flex justify-between items-center my-2">
      <span>{list.text}</span>
      <Button handleClick={() => handleRemoveList(list.id)} text="Delete" />
    </li>
  );
};

export default ListItem;
