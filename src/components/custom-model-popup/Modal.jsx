import React from "react";

const Model = ({ id, header, footer, onClose, body }) => {
  return (
    <div
      id={id || "Modal"}
      className="fixed z-10 inset-0 flex items-start justify-center bg-lime-300 bg-opacity-90 pt-36"
    >
      <div className="relative w-4/5 bg-white border border-red-500 shadow-lg animate-modal">
        <div className="flex justify-between items-center bg-green-600 text-white px-4 py-2">
          <h2>{header || "Header"}</h2>
          <span onClick={onClose} className="cursor-pointer text-2xl font-bold">
            &times;
          </span>
        </div>
        <div className="p-4 h-52 overflow-auto">
          {body || (
            <div>
              <p>This is our Modal Body</p>
            </div>
          )}
        </div>
        <div className="px-4 py-2 bg-green-600 text-white">
          {footer || <h2>Footer</h2>}
        </div>
      </div>
    </div>
  );
};

export default Model;
