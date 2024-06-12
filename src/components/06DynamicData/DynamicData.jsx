import React, { useState } from "react";

const DynamicData = () => {
  const imgs = [1, 2, 3, 4, 5]; // this data can be get by some api in props
  // no. above can be replaced by the images or any data
  const [image, setImage] = useState(imgs[0]);
  return (
    <>
    <div className="border border-slate-900 flex flex-col gap-8" >
      <div  className="border border-slate-900 flex gap-8">
        {imgs.map((item, index) => {
          return (
            <div
              className="border border-slate-900 bg-red-400 h-10 w-20 "
              key={index}
              onClick={() => setImage(item)}
            >
              {item}
            </div>
          );
        })}
       
      </div>
      <div className="border border-slate-900 bg-red-400 ">
        My no changes as you click the tab above 
        {image}
      </div>
      </div>
    </>
  );
};

export default DynamicData;
