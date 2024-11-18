import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {
  return (
    <ul className="list-none mt-0 mb-0">
      {list.map((listItem) => (
        <MenuItem key={listItem.label} item={listItem} />
      ))}
    </ul>
  );
}
