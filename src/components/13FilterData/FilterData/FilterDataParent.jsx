import React from "react";
import FilterMyData from "./FilterMyData";
import FilterDataContext from "./FilterDataContext";

const FilterDataParent = () => {
  return (
    <div>
      <FilterDataContext>
        <FilterMyData />
      </FilterDataContext>
    </div>
  );
};

export default FilterDataParent;
