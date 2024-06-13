import React from "react";
import SingleGridProduct from "./SingleGridProduct";

const GridView = (user) => {
  const data = user.user ;
 
  return (
    <div className="grid grid-cols-2">
          {data.map((item, index) => {
        return <SingleGridProduct key={index} {...item} />
      })}
    </div>
  );
};

export default GridView;
