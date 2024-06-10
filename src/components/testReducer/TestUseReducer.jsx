import React, { useReducer, useState } from "react";

const TestUseReducer = () => {
  // Manipulating stae using useState
  const [myName, setMyName] = useState("Mohammad Ali");

  const showMyName = () => {
    setMyName(myName + "Wazahat");
  };

  // Manipulating state using useReducer
  const initialState = " Mohammad ";

  function testingName(raza) {
    dispatch({ type: "name", payload: raza });
  }

  const testReducer = (state, action) => {
    switch (action.type) {
      case "name":
        return state + action.payload;
      default: {
        throw Error("Unknown action: ");
      }
    }
  };

  const [state, dispatch] = useReducer(testReducer, initialState);

  console.log(state);

  return (
    <div>
      <div>{myName}</div>
      <button
        className="border border-slate-800 rounded  bg-slate-300 py-2 px-4 my-4"
        onClick={() => showMyName()}
      >
        Change mY Name using useState
      </button>
      <div>{state}</div>
      <button
        className="border border-slate-800 rounded  bg-slate-300 py-2 px-4 my-4"
        onClick={() => {
          testingName("rza g");
        }}
      >
        testReducer using useReducer
      </button>
    </div>
  );
};

export default TestUseReducer;
