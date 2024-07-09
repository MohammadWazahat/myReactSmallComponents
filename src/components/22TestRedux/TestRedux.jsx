import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionTypeOneFirstSlice,
  actionTypeTwoFirstSlice,
} from "../../redux/features/firstSlice/firstSlice";
import {
  actionTypeOnesecondSlice,
  actionTypeTwosecondSlice,
  AddToCart,
} from "../../redux/features/secondSlice/secondSlice";

const TestRedux = () => {
  const dispatch = useDispatch();
  //   console.log(dispatch);

  const firstValue = useSelector((state) => state.storeSliceOne.value);
  //   console.log(firstValue);

  const secondValue = useSelector((state) => state.storeSliceTwo.value);
  //   console.log(secondValue);

  const cartData = useSelector((state) => state.storeSliceTwo.cart);
  console.log(cartData);

  const [text, setText] = useState({
    textValue: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.value);
    setText({ ...text, textValue: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    // console.log(text)
  };
  return (
    <div>
      <div>{firstValue}</div>
      <div>{secondValue}</div>
      <button onClick={() => dispatch(actionTypeOneFirstSlice("Add Me"))}>
        actionTypeOneFirstSlice
      </button>
      <button onClick={() => dispatch(actionTypeTwoFirstSlice("Add Me"))}>
        actionTypeTwoFirstSlic
      </button>
      <button onClick={() => dispatch(actionTypeOnesecondSlice("Add Me"))}>
        actionTypeOnesecondSlice
      </button>
      <button onClick={() => dispatch(actionTypeTwosecondSlice("Add Me"))}>
        actionTypeTwosecondSlice
      </button>

      <form onSubmit={submitForm}>
        <label htmlFor="text">todo</label>
        <input
          type="text"
          name="text"
          placeholder="Write Todo"
          onChange={handleChange}
        />
        <button type="submit" onClick={() => dispatch(AddToCart(text))}>
          AddToCart
        </button>
      </form>
      <div>
        {cartData.map((item, index) => {
          return <div key={index}>{item.textValue}</div>;
        })}
      </div>
    </div>
  );
};

export default TestRedux;
