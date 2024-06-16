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
import ChangeButtonColor from "./10ButtonColor/ChangeButtonColor";
import ToggleGridNList from "./11GridAndListView/ToggleGridNList";
import SortingData from "./12SortingData/SortingData";
import FilterData from "./13FilterData/FilterData";
import SearchFilterData from "./13FilterData/SearchFilterData";
import FilterByColor from "./13FilterData/FilterByColor";
import MergingAnArray from "./13FilterData/MergingAnArray";
import AddingToCart from "./14Cart/AddingToCart";
import CounterReducer from "./15CounterUseReducer/CounterReducer";

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
          {/* <DynamicData /> */}
          {/* <StarRating /> */}
          {/* <ColorPicker/> */}
          {/* <AddToCart/> */}
          {/* <ChangeButtonColor/> */}
          {/* <ToggleGridNList/> */}
          {/* <SortingData/> */}
          {/* <FilterData/> */}
          {/* <SearchFilterData/> */}
          {/* <FilterByColor/> */}
          {/* <MergingAnArray/> */}
          {/* <AddingToCart/> */}
          <CounterReducer/>
        </div>
      </counterContext.Provider>
    </>
  );
};

export default AllComponents;
