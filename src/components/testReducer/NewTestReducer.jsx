import React, { useReducer, useState } from "react";

const NewTestReducer = () => {
  // Manipulating stae using useState
  const [myName, setMyName] = useState("Mohammad Ali");

  const showMyName = () => {
    setMyName(myName + "Wazahat");
  };

  // Manipulating state using useReducer
  const initialState = " Mohammad ";

  function testingName() {
    dispatch({ type: "NAME", payload: "raza g" });
  }

  const testReducer = (state, action) => {
    switch (action.type) {
      case "NAME":
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
      <div>
        <div>{myName}</div>
        <button onClick={() => showMyName()}>
          Change mY Name using useState
        </button>
        <div>{state}</div>
        <button
          onClick={() => {
            testingName();
          }}
        >
          testReducer using useReducer
        </button>
      </div>
    </div>
  );
};

export default NewTestReducer;
