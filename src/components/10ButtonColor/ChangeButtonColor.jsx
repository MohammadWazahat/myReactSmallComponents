import React, { useState } from "react";

const ChangeButtonColor = () => {
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
        <div>i Change my color when i clicked</div>
      <button
        className={text ? " bg-green-500 " : " bg-purple-300"}
        onClick={() => toggleSize()}
      >
        click me
      </button>
    </div>
  );
};

export default ChangeButtonColor;
