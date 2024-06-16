import React, { useReducer } from "react";
import Data from "./mobileData.json";
import CartPage from "./CartPage";

const AddToCartReducer = () => {
  const initialState = [];
  const reducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      const newState = [...state, action.payload];
      return newState;
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const AddToMyCart = (x) => {
    console.log("i m clicked");
    dispatch({
      type: "ADD_TO_CART",
      payload: x,
    });
  };

  console.log(state);

  return (
    <>
      <div>
        adding to cart
        {Data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col m-8 border border-slate-800"
              onClick={() => AddToMyCart({ ...item })}
            >
              <button>{item.product_name}</button>
              <div>{item.brand}</div>
              <div>{item.color}</div>
            </div>
          );
        })}
      </div>
      <hr className="border border-slate-900 m-10" />
      <div>
        <CartPage newDatas={state} />
      </div>
    </>
  );
};

export default AddToCartReducer;
