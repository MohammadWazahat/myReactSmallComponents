import React, { useReducer, useState } from "react";
import Data from "./mobileData.json";

const SearchFilterReducer = () => {
  const [text, setText] = useState("");

  const inputHandler = (e) => {
    const name = e.target.value;
    setText({ ...text, name });
  };
  console.log(text);

  const initialState = Data;

  const reducer = (state, action) => {
    if (action.type === "FILTER_BY_SEARCH") {
      const filteredData = action.payload.pay1.filter((item) => {
        return item.brand.toLowerCase().includes(action.payload.pay2);
      });
      return filteredData;
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const filterByText = (t) => {
    dispatch({
      type: "FILTER_BY_SEARCH",
      payload: {
        pay1: initialState,
        pay2: t,
      },
    });
  };

  return (
    <div>
      <div>
        <div>
          <h2>Create Crud app</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <label>name</label>
            <input type="text" name="brand" onChange={inputHandler} />
            <button
              type="submit"
              className="m-4 p-4 "
              onClick={() => filterByText(text.name)}
            >
              click me
            </button>
          </form>

          {state.map((item, index) => {
            return (
              <div key={index}>
                <div> {item.product_name}</div>
                <div>{item.brand}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchFilterReducer;
