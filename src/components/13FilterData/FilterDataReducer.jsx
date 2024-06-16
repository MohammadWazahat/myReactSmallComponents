import React, { useReducer } from "react";
import Data from "./mobileData.json";

const FilterDataReducer = () => {

  const initialState = Data;
  const reducer = (state, action) => {
    console.log(action);
    if (action.type === "FILTER_BY_BRAND") {
      const brands = action.payload.pay1.filter(
        (data) => data.brand === action.payload.pay2
      );
      return brands;
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const filterByBrand = (x) => {
    console.log("i m clicked");
    dispatch({
      type: "FILTER_BY_BRAND",
      payload: {
        pay1: [...initialState],
        pay2: x,
      },
    });
  };

  return (
    <div>
      <div>
        <button onClick={() => filterByBrand("Samsung")}>samsung</button>
        <button onClick={() => filterByBrand("LG")}>LG</button>
        <button onClick={() => filterByBrand("Oppo")}>Oppo</button>
        <button onClick={() => filterByBrand("vivo")}>Vivo</button>

        {state.map((item, index) => {
          return (
            <div key={index}>
              <div> {item.product_name}</div>
              <div>{item.brand}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterDataReducer;
