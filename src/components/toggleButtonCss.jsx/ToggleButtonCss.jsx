import React, { useState } from "react";

const ToggleButtonCss = () => {
  const [text, setText] = useState(true);


  const toggleSize = () => {
    if (text === true) {
      setText(false);
    } else {
        setText(true);
    }
  };

  return (
    <div>
      <div className={text ? "text-sm bg-green-500 " : "text-3xl bg-purple-300"}>hello world</div>
      <button className="border border-slate-800 rounded  bg-slate-300 py-2 px-4 " onClick={() => setText(true)}>decrease mi size</button>
      <button className="border border-slate-800 rounded  bg-slate-300 py-2 px-4 " onClick={() => setText(false)}>increase mi size</button>

      <div className={text ? "text-sm bg-green-500 " : "text-3xl bg-purple-300"}>hello world</div>
      <button className="border border-slate-800 rounded  bg-slate-300 py-2 px-4 " onClick={() => toggleSize()}>inc dec same button</button>
    </div>
  );
};

export default ToggleButtonCss;
