import Button from "../UI/Button";

const ListItem = ({ listItem }: { listItem: string }) => {
  return (
    <li>
      {listItem}
      <Button handleClick={() => {}} text="Delete" />
    </li>
  )
}

export default ListItem