import React, { useState } from "react";

const Tabs = ({ tabsContent, onChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleOnClick(getCurrentIndex) {
    setCurrentIndex(getCurrentIndex);
    // onChange(getCurrentIndex);
  }
  return (
    <div className="p-2 flex flex-col gap -5 justify-center items-center">
      <div className="flex justify-center mb-3 gap-5">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`inline-flex text-xl font-bold text-center px-4 py-2 cursor-pointer border-none ${
              currentIndex === index
                ? "bg-lime-500 text-white"
                : "bg-purple-800 text-white"
            }`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span>{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div>
        {tabsContent[currentIndex] && tabsContent[currentIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
