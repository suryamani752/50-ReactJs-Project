import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }

  return (
    <li>
      <div className="flex items-center gap-5 cursor-pointer text-white">
        <p>{item.label}</p>
        {item.children?.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus size={20} />
            ) : (
              <FaPlus size={20} />
            )}
          </span>
        ) : null}
      </div>

      {item.children?.length > 0 && displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
