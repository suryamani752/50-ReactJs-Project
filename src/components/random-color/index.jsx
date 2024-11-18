import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function hexColorGenerator() {
    const hex = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";
    for (let i = 0; i < hex.length; i++) {
      hexColor += hex[randomUtility(hex.length)];
    }
    setColor(hexColor);
  }
  function rgbColorGenerator() {
    const r = randomUtility(256);
    const g = randomUtility(256);
    const b = randomUtility(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }
  useEffect(() => {
    if (typeOfColor === "rgb") {
      rgbColorGenerator();
    } else {
      hexColorGenerator();
    }
  }, [typeOfColor]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button
        className="text-gray-300 border m-4 p-5 rounded-md"
        onClick={() => setTypeOfColor("hex")}
      >
        Create Hex Color
      </button>
      <button
        className="text-gray-300 border m-4 p-5 rounded-md"
        onClick={() => setTypeOfColor("rgb")}
      >
        Create rgb Color
      </button>
      <button
        className="text-gray-300 border m-4 p-5 rounded-md"
        onClick={typeOfColor === "hex" ? hexColorGenerator : rgbColorGenerator}
      >
        Generate Random {typeOfColor === "hex" ? "hex Color" : "rgb Color"}
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === "hex" ? "hex color" : "rgb color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
