import React from "react";
import Data from "../../../public/dummyJson.json";
import SingleProduct from "../05singleProduct/SingleProduct";

const RenderJson = () => {
  console.log(Data[0]);
  console.log(Data[0].email);

  return (
    <div>
      <div>i m render json</div>
      <div className="grid grid-cols-4 gap-4 ">
        {Data.map((item) => {
          return <SingleProduct key={ item.id } { ...item } />;
        })}
       
      </div>
    </div>
  );
};

export default RenderJson;
