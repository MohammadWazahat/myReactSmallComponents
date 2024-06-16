import React, { useEffect, useState } from "react";
import Data from "./mobileData.json";

const FilterData = () => {
  const [data, setData] = useState(Data);

  const filterByBrand = (x) => {
    const brands = data.filter((data) => data.brand === x);
    console.log(brands);
    setData(brands);
  };

  const reset = () => {
    setData(Data);
  };

  // to sort an array
  //   const name = ["poonam" , "pooja" , "poornima" ];
  //   console.log(ages)

  // useEffect(()=>{
  //  const sort=  name.filter((data)=> data === "pooja" );
  //  console.log(sort)
  // })

  return (
    <div>
      <button onClick={() => filterByBrand("Samsung")}>samsung</button>
      <button onClick={() => filterByBrand("LG")}>LG</button>
      <button onClick={() => filterByBrand("Oppo")}>Oppo</button>
      <button onClick={() => filterByBrand("vivo")}>Vivo</button>
      <button onClick={() => reset()}>reset</button>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div> {item.product_name}</div>
            <div>{item.brand}</div>
          </div>
        );
      })}
    </div>
  );
};

export default FilterData;
