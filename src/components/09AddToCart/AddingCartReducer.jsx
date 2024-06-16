import React, { useReducer } from "react";

const AddingCartReducer = () => {
  const stock = 5;
  const initialState = 1;

  const reducer = (state, action) => {
    if (action.type === "DEC_STOCK") {
      return state > 1 ? state - action.payload : 1;
    }
    if (action.type === "INC_STOCK") {
      return state < stock ? state + action.payload : stock;
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const setDecrease = () => {
    dispatch({
      type: "DEC_STOCK",
      payload: 1,
    });
  };
  const setIncrease = () => {
    dispatch({
      type: "INC_STOCK",
      payload: 1,
    });
  };

  return (
    <div>
      <div>
        i m add to cart
        <button
          onClick={() => {
            setDecrease();
          }}
        >
          Decrease
        </button>
        {state}
        <button
          onClick={() => {
            setIncrease();
          }}
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default AddingCartReducer;
