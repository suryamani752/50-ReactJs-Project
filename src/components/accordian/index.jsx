import React, { useState } from "react";
import data from "./data";
import toast from "react-hot-toast";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multipleSelections, setMultipleSelections] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(selected === id ? null : id);
  };

  const handleMultipleSelection = (id) => {
    setMultipleSelections((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleMode = () => {
    setEnableMultipleSelection((prev) => {
      toast.success(
        prev
          ? "Disabled Multiple Selection Mode"
          : "Enabled Multiple Selection Mode"
      );
      return !prev;
    });
    if (!enableMultipleSelection) {
      setMultipleSelections([]); 
    }
  };

  return (
    <div>
      <div className="w-[220px] mx-auto mt-5 bg-black text-white p-4 rounded">
        <button onClick={toggleMode}>
          {enableMultipleSelection
            ? "Disable Multiple Selection"
            : "Enable Multiple Selection"}
        </button>
      </div>

      <div>
        {data && data.length > 0 ? (
          
          data.map((item) => {
            const isSingleSelected = selected === item.id;
            const isMultipleSelected = multipleSelections.includes(item.id);
            const isOpen = enableMultipleSelection
              ? isMultipleSelected
              : isSingleSelected;

            return (
              <div key={item.id} className="w-3/6 mx-auto">
                <div
                  className="flex justify-between cursor-pointer bg-slate-600 text-2xl mt-5 p-5"
                  onClick={() =>
                    enableMultipleSelection
                      ? handleMultipleSelection(item.id)
                      : handleSingleSelection(item.id)
                  }
                  aria-expanded={isOpen}
                >
                  <h3 className="text-gray-300">{item.question}</h3>
                  <span>{isOpen ? "-" : "+"}</span>
                </div>
                {isOpen && <div className="p-5 text-xl">{item.answer}</div>}
              </div>
            );
          })
        ) : (
          <p>No Data Found</p>
        )}
      </div>
    </div>
  );
};

export default Accordian;
