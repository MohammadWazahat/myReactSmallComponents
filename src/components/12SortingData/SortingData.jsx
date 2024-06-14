import React, { useState } from "react";
import Data from "../../../public/dummyJson.json";

const SortingData = () => {
  const [data, setData] = useState(Data);
  const [order, setOrder] = useState("ASC");
  const [stockOrder, setStockOrder] = useState("ASC");

  const SortAsc = () => {
    if (order == "ASC") {
      const sorted = [...data].sort((a, b) => {
        return a.first_name.localeCompare(b.first_name);
      });
      setData(sorted);
      setOrder("DSC");
    }
    // for same button work as decending
    // if ( order == 'DSC'){
    //     const sorted = [...data].sort((a,b)=>{
    //         return b.first_name.localeCompare(a.first_name);
    //     })
    //     setData(sorted);
    //     setOrder("ASC");
    //     console.log(data)
    // }
  };

  const SortDesc = () => {
    if (order == "DSC") {
      const sorted = [...data].sort((a, b) => {
        return b.first_name.localeCompare(a.first_name);
      });
      setData(sorted);
      setOrder("ASC");
    }
  };

  const SortLowest = () => {
    if (stockOrder == "ASC") {
      const sorted = [...data].sort((a, b) => {
        return a.stock - b.stock;
      });
      setData(sorted);
      setStockOrder("DSC");
    }
  };
  const SortHighest = () => {
    console.log("button clicked")
    if (stockOrder == "DSC") {
      const sorted = [...data].sort((a, b) => {
        return b.stock - a.stock;
      });
      console.log(sorted)
      setData(sorted);
    
      setStockOrder("ASC");
    }
  };

  return (
    <div>
      <button onClick={() => SortAsc()}>Ascending</button>
      <button onClick={() => SortDesc()}>Descending</button>
      <button onClick={() => SortLowest()}>Low stock first</button>
      <button onClick={() => SortHighest()}>High Stock first</button>
      <div>
        {data.map((item, index) => {
          return (
            <div key={index}>
              {item.first_name} {item.last_name} {item.stock}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SortingData;
