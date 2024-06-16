import React, { useReducer } from "react";
import Data from "../../../public/dummyJson.json";

const SortingDataReducer = () => {

  const initialState = Data;

  const reducer = (state, action) => {
    if (action.type === "ASCENDING") {
      const sorted = action.payload.sort((a, b) => {
        return a.first_name.localeCompare(b.first_name);
      });
      return sorted;
    }
    if (action.type === "DESCENDING") {
      const sorted = action.payload.sort((a, b) => {
        return b.first_name.localeCompare(a.first_name);
      });
      return sorted;
    }
    if (action.type === "LOWEST") {
      const sorted = action.payload.sort((a, b) => {
        return a.stock - b.stock;
      });
      return sorted;
    }
    if (action.type === "HIGHEST") {
      const sorted = action.payload.sort((a, b) => {
        return b.stock - a.stock;
      });
      return sorted;
    }
    return state;
  };

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
    <div>
      <div>
       
        <button onClick={() => SortLowestRed()}>Low stock first</button>
        <button onClick={() => SortHighestRed()}>High Stock first</button>
        <button onClick={() => SortAscRed()}>AscendingRed</button>
        <button onClick={() => SortDescRed()}>DescendingRed</button>
        <div>
          {state.map((item, index) => {
            return (
              <div key={index}>
                {item.first_name} {item.last_name} {item.stock}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SortingDataReducer;
