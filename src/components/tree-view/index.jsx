import MenuList from "./menu-list";

export default function TreeView({ menus = [] }) {
  return (
    <div className="min-h-screen w-[350px] bg-[#00476E]">
      <MenuList list={menus} />
    </div>
  );
}
