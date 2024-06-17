import React, { useReducer, useState } from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import Data from "../../../public/dummyJson.json";

const ToggleReducer = () => {
  const reducer = (state, action) => {
    if (action.type === "GRID_TYPE") {
      return action.payload;
    }
    if (action.type === "LIST_TYPE") {
      return action.payload;
    }
    return state;
  };

  const initialState = true;
  const [state, dispatch] = useReducer(reducer, initialState);

  const gridView = (x) => {
    console.log("i m clicked grid");
    dispatch({
      type: "GRID_TYPE",
      payload: x,
    });
  };
  const listView = (x) => {
    console.log("i m clicked list");
    dispatch({
      type: "LIST_TYPE",
      payload: x,
    });
  };

  return (
    <div>
      <div>
        toggle grid and list
        <button onClick={() => gridView(true)}>grid</button>
        <button onClick={() => listView(false)}>list</button>
        {state ? <GridView user={Data} /> : <ListView user={Data} />}
      </div>
    </div>
  );
};

export default ToggleReducer;
