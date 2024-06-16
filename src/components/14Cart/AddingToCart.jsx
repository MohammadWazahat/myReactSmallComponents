import React, { useState } from "react";
import Data from "./mobileData.json";
import CartPage from "./CartPage";

const AddingToCart = () => {
    const [newDatas ,setNewDatas] = useState([])

  const AddToMyCart = (x) => {
    // console.log(x);
    setNewDatas([...newDatas , x]);
    // console.log(newDatas)
  };

  return (
    <>
      <div>
        adding to cart
        {Data.map((item, index) => {
          return (
            <div key={index}
              className="flex flex-col m-8 border border-slate-800"
              onClick={() => AddToMyCart({...item})}
            >
              <button >{item.product_name}</button>
              <div>{item.brand}</div>
              <div>{item.color}</div>
            </div>
          );
        })}
      </div>
      <hr className="border border-slate-900 m-10" />
      <div>
        <CartPage  newDatas= {newDatas} />
      </div>
    
    </>
  );
};

export default AddingToCart;
