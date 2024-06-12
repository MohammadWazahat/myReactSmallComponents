import React from "react";
import data from "./colors.json";
const ColorPicker = () => {
    const Data = data[0].colors ;
    console.log(Data)
//   console.log(data[0].colors[0]);
  return (
    <div>
      i m color picker
      {Data.map((item, index) => {
        return <button key={index} style={{backgroundColor : item }} >{item}</button>;
      })}
    </div>
  );
};

export default ColorPicker;
