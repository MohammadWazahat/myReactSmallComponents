import React, { useEffect, useState } from "react";
import Data from "./mobileData.json";

const FilterByColor = () => {
const [myColor,setMyColor ] = useState(Data)

  // Search data from json file and return array of unique colors
//   useEffect(() => {
//     const colors = Data.map((item) => {
//       return item.color;
//     });
//     // console.log(colors);
//     const uniqueColors = [...new Set([].concat(...colors))];
//     // console.log(uniqueColors);
//     setMyColor(uniqueColors)
   
//   },[]);

  const findUniqueColor = () => {
    const colors = Data.map((item) => {
        return item.color;
      });
      // console.log(colors);
      const uniqueColors = [...new Set([].concat(...colors))];
      // console.log(uniqueColors);
      setMyColor(uniqueColors)
  }


  console.log(myColor)

  return <div>i am color filter
    <div>
        <button type="button" onClick={()=>findUniqueColor()}>unique color</button>
    {myColor.map((item, index) => {
        return (
          <div key={index}>
            <div> {item.color}</div>
          </div>
        );
      })}
    </div>
  </div>;
};

export default FilterByColor;
