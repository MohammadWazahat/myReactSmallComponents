import React, { useState } from "react";
import ToggleTheme from "./toggleTheme/ToggleTheme";
import "./AllComponents.css";
import ToggleButtonCss from "./toggleButtonCss.jsx/ToggleButtonCss";
import { counterContext } from "../context/context";
import TestUseReducer from "./testReducer/TestUseReducer";
import RenderJson from "./04renderingJsonData/RenderJson";
import DynamicData from "./06DynamicData/DynamicData";
import StarRating from "./07StarRating/StarRating";
import ColorPicker from "./08ColorPicker/ColorPicker";
import AddToCart from "./09AddToCart/AddToCart";

const AllComponents = () => {
  const [count, setCount] = useState("hello g");

  const changeInnerText = () => {
    setCount("world g");
  };

  return (
    <>
      <counterContext.Provider value={{ count, changeInnerText }}>
        <div>
          hi i m all components
          {/* <ToggleTheme/> */}
          {/* <ToggleButtonCss/> */}
          {/* <TestUseReducer/> */}
          {/* <RenderJson/> */}
          <DynamicData />
          <StarRating />
          <ColorPicker/>
          <AddToCart/>
        </div>
      </counterContext.Provider>
    </>
  );
};

export default AllComponents;
