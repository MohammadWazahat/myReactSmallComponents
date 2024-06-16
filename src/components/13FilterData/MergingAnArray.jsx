import React, { useEffect } from "react";
import Data from "./mobileData.json";

const MergingAnArray = () => {
      // array of arrays
  const newVal = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    [6, 4, 7, 9, 3, 0, 6, 4, 2, 8],
    [3, 9, 0, 6, 3, 1, 0],
  ];

  // to merge all array in one
//   const x = [].concat(...newVal);
  // console.log(x)

  // to remove same value or get an array of unique values
//   const Y = [...new Set(x)];
  // console.log(Y)

   // to merge all array in one
  const x = newVal.flat();
  console.log(x)
    const Y = [...new Set(x)];
  console.log(Y)


  // to return highest value in the array 
  const z = Math.max(...Y)
  console.log(z)

  // Search data from json file and return array of unique colors
  useEffect(() => {
    const colors = Data.map((item) => {
      return item.color;
    });
    // console.log(colors);
    const uniqueColors = [...new Set([].concat(...colors))];
    // console.log(uniqueColors);
  });

  return (
    <div>
      merge me
    </div>
  )
}

export default MergingAnArray
