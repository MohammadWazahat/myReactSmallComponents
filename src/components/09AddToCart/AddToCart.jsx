import React, { useState } from "react";

const AddToCart = () => {
  const stock = 5;
  const [amount, setAmount] = useState(1);
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <div>
      i m add to cart
      <button
        onClick={() => {
          setDecrease();
        }}
      >
        Decrease
      </button>
      {amount}
      <button
        onClick={() => {
          setIncrease();
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default AddToCart;
