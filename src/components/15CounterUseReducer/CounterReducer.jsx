import React, { useReducer, useState } from "react";

const CounterReducer = () => {
  const initialState = 0;
  const countReducer = (state, action) => {
    console.log(state);
    console.log(action);
    console.log(action.type);
    console.log(action.payload);
    if (action.type === "INC_ITEM") {
      return state + action.payload;
    }
    if (action.type === "DEC_ITEM") {
      return state - action.payload;
    }
    if (action.type === "INC_BY_TWO_ITEM") {
        return state + action.payload;
      }
      if (action.type === "DEC_BY_TWO_ITEM") {
        return state - action.payload;
      }
    return state;
  };

  const [count, dispatch] = useReducer(countReducer, initialState);
  const incState = () => {
    console.log("i m clicked");
    const newAction = {
      type: "INC_ITEM",
      payload: 1,
    };
    dispatch(newAction);
  };
  const decState = () => {
    console.log("i m clicked");
    const newAction = {
      type: "DEC_ITEM",
      payload: 1,
    };
    dispatch(newAction);
  };
  const incByTwoState = () => {
    console.log("i m clicked");
    const newAction = {
      type: "INC_BY_TWO_ITEM",
      payload: 2,
    };
    dispatch(newAction);
  };
  const decByTwoState = () => {
    console.log("i m clicked");
    const newAction = {
      type: "DEC_BY_TWO_ITEM",
      payload: 2,
    };
    dispatch(newAction);
  };
  return (
    <div>
      <button type="button" onClick={() => incState()}>
      
        increase
      </button>
      <button type="button" onClick={() => incByTwoState()}>
        inc by two
      </button>
      {count}
      <button type="button" onClick={() => decByTwoState()}>
        dec by two
      </button>
      <button type="button" onClick={() => decState()}>
        decrease
      </button>
    </div>
  );
};

export default CounterReducer;
