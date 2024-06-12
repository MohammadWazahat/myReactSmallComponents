import React from "react";

const SingleProduct = (item) => {
  console.log(item.id);
  return (
    <div className=" m-8 border border-slate-700 rounded-xl bg-slate-200">
      <div className=" p-4 border border-slate-700 ">
        <div>{item.id}</div>
        <div>
          <img className=" h-60 w-60 mx-auto " src={item.image} alt="" />
        </div>
        <div className=" m-2 border border-slate-700 ">{item.first_name}</div>
        <div className=" m-2 border border-slate-700 ">{item.last_name}</div>
        <div className=" m-2 border border-slate-700 ">{item.email}</div>
        <div className=" m-2 border border-slate-700 ">{item.gender}</div>
        <div className=" m-2  ">flipkart assured</div>
      </div>
    </div>
  );
};

export default SingleProduct;
