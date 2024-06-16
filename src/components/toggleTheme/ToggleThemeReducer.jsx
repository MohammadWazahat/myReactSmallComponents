import React, { useReducer, useState } from "react";
import "./ToggleTheme.css";

const ToggleThemeReducer = () => {

  const initialState = true;
  const reducer = (state, action) => {
    if (action.type === "TOGGLE_ME_LIGHT") {
      console.log(action.payload)
      return !action.payload;
    }

    return state;
  };

  const [color, dispatch] = useReducer(reducer, initialState);

  const toggleLightReducer = () => {
    console.log("light theme button is clicked");
    const newAction = {
      type: "TOGGLE_ME_LIGHT",
      payload: color,
    };
    dispatch(newAction);
  };

  console.log(color);

  return (
    <>
      <div>
        <button
          className={color ? "lightButton" : "darkButton"}
          onClick={() => {
            toggleLightReducer();
          }}
        >
          Toggle Mode reducer
        </button>
      </div>
    </>
  );
};

export default ToggleThemeReducer;
