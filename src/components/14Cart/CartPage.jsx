import React from "react";

const CartPage = (newDatas) => {
  // console.log(newDatas);
  const arr = { ...newDatas };
  // console.log(arr)
  // console.log(arr.newDatas);
  const newArr = arr.newDatas;
  // console.log(newArr);


  return (
    <div>
      {newArr.map((item, index) => {
        return <div key={index}>{item.color}</div>;
      })}
    </div>
  );
};

export default CartPage;
