import React, { useState } from "react";
import "./AllComponents.css";
import { counterContext } from "../context/context";
import ToggleTheme from "./toggleTheme/ToggleTheme";
import ToggleButtonCss from "./toggleButtonCss.jsx/ToggleButtonCss";
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
import ToggleThemeReducer from "./toggleTheme/ToggleThemeReducer";
import NewTestReducer from "./testReducer/NewTestReducer";
import DynamicTabReducer from "./06DynamicData/DynamicTabReducer";
import AddingCartReducer from "./09AddToCart/AddingCartReducer";
import SortingDataReducer from "./12SortingData/SortingDataReducer";
import FilterDataReducer from "./13FilterData/FilterDataReducer";
import SearchFilterReducer from "./13FilterData/SearchFilterReducer";
import AddToCartReducer from "./14Cart/AddToCartReducer";
import SortDataDividedFile from "./16SortDividedInFile/SortDataDividedFile";
import ParentComponent from "./16SortDividedInFile/ParentComponent";
import FilterMyData from "./13FilterData/FilterData/FilterMyData";
import FilterDataParent from "./13FilterData/FilterData/FilterDataParent";
import ToggleReducer from "./11GridAndListView/ToggleReducer";
import FormTesting from "./17Form/FormTesting";
import FormFormik from "./17Form/FormFormik";
import ImageUploader from "./18imageUploader/ImageUploader";
import ImageUrlUploader from "./18imageUploader/ImageUrlUploader";
import FollowUnfollow from "./19FollowUnfollow/FollowUnfollow";
import TestImageUploader from "./20TestImage/TestImageUploader";
import TestRedux from "./22TestRedux/TestRedux";

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
          {/* <CounterReducer/> */}
          {/* <ToggleThemeReducer/> */}
          {/* <NewTestReducer/> */}
          {/* <DynamicTabReducer/> */}
          {/* <AddingCartReducer/> */}
          {/* <SortingDataReducer/> */}
          {/* <FilterDataReducer/> */}
          {/* <SearchFilterReducer/> */}
          {/* <AddToCartReducer/> */}
          {/* <SortDataDividedFile/> */}
          {/* <ParentComponent/> */}
          {/* <FilterDataParent/> */}
          {/* <ToggleReducer/> */}
          {/* <FormTesting /> */}
          {/* <FormFormik/> */}
          {/* <ImageUploader/> */}
          {/* <ImageUrlUploader/> */}
          {/* <FollowUnfollow/> */}
          {/* <TestImageUploader/> */}          
          <TestRedux/>
        </div>
      </counterContext.Provider>
    </>
  );
};

export default AllComponents;
