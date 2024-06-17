import React, { createContext, useReducer } from "react";
import Data from "./mobileData.json";
import { reducer } from "./FilterDataRed";

export const FilterContext = createContext();

const FilterDataContext = ({ children }) => {
  const initialState = Data;
  const [state, dispatch] = useReducer(reducer, initialState);

  const filterByBrand = (x) => {
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
      <FilterContext.Provider
        value={{
          state: state,
          filterByBrand: filterByBrand,
        }}
      >
        {children}
      </FilterContext.Provider>
    </div>
  );
};

export default FilterDataContext;
