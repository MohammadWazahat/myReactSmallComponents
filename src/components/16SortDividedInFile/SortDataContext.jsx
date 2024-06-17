import { createContext } from "react";
import React, { useReducer } from "react";
import Data from "../../../public/dummyJson.json";
import { reducer } from "./SortReducerFile";

export const SortingDataContext = createContext();

const SortContext = ({ children }) => {
 
  const initialState = Data;
  const [state, dispatch] = useReducer(reducer, initialState);

  const SortAscRed = () => {
    dispatch({
      type: "ASCENDING",
      payload: [...state],
    });
  };

  const SortDescRed = () => {
    dispatch({
      type: "DESCENDING",
      payload: [...state],
    });
  };

  const SortLowestRed = () => {
    dispatch({
      type: "LOWEST",
      payload: [...state],
    });
  };

  const SortHighestRed = () => {
    dispatch({
      type: "HIGHEST",
      payload: [...state],
    });
  };

  return (
    <>
      <SortingDataContext.Provider
        value={{
          state: state,
          SortAscRed: SortAscRed,
          SortDescRed: SortDescRed,
          SortLowestRed: SortLowestRed,
          SortHighestRed: SortHighestRed,
        }}
      >
        {children}
      </SortingDataContext.Provider>
    </>
  );
};

export default SortContext;
