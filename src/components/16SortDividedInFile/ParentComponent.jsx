import React from "react";
import SortContext from "./SortDataContext";
import SortDataDividedFile from "./SortDataDividedFile";

const ParentComponent = () => {
  return (
    <>
      <SortContext>
        <div>
          i m parent component
          <SortDataDividedFile />
        </div>
      </SortContext>
    </>
  );
};

export default ParentComponent;
