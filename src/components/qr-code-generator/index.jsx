import React, { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }
  return (
    <div className="flex flex-col gap-5 mt-5 p-5 justify-center items-center">
      <div className="flex flex-col gap-3 p-5 mt-2">
        <h1 className="text-2xl font-extrabold">QR Code Generator</h1>
        <div className="flex gap-4">
          <input
            className="outline-none border p-3 rounded-lg"
            type="text"
            name="text"
            value={input}
            placeholder="Enter your value here"
            ref={inputRef}
            onChange={(event) => setInput(event.target.value)}
          />
          <button
            onClick={handleGenerateQrCode}
            className="disabled:bg-gray-400 disabled:text-black p-5 rounded-lg font-semibold bg-black text-white"
            disabled={input && input.trim() !== "" ? false : true}
          >
            Generate
          </button>
        </div>
      </div>
      <div>
        {qrCode === "" ? (
          <p className="text-xl">Please Generate QR Code</p>
        ) : (
          <QRCode id="qr-code-value" value={qrCode} size={300} bgColor="#fff" />
        )}
      </div>
    </div>
  );
};

export default QrCodeGenerator;
