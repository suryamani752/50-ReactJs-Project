import React from "react";

const Suggestions = ({ handleClick, data }) => {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => (
            <li key={index} onClick={handleClick}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
};

export default Suggestions;
