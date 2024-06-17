import React, { useContext } from "react";
import { SortingDataContext } from "./SortDataContext";

const SortDataDividedFile = () => {
  const { state, SortAscRed, SortDescRed, SortLowestRed, SortHighestRed } =
    useContext(SortingDataContext);

  //  console.log(value1)
  //  console.log(a.x1)

  return (
    <div>
      <div>
        <div>
          <button onClick={() => SortLowestRed()}>Low stock first</button>
          <button onClick={() => SortHighestRed()}>High Stock first</button>
          <button onClick={() => SortAscRed()}>AscendingRed</button>
          <button onClick={() => SortDescRed()}>DescendingRed</button>
          <div>
            {state.map((item, index) => {
              return (
                <div key={index}>
                  {item.first_name} {item.last_name} {item.stock}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortDataDividedFile;
