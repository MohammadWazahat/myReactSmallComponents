import React, { useContext } from "react";
import Data from "./mobileData.json";
import { FilterContext } from "./FilterDataContext";

const FilterMyData = () => {
  const { state, filterByBrand } = useContext(FilterContext);

  return (
    <div>
      <div>
        <div>
          <button onClick={() => filterByBrand("Samsung")}>samsung</button>
          <button onClick={() => filterByBrand("LG")}>LG</button>
          <button onClick={() => filterByBrand("Oppo")}>Oppo</button>
          <button onClick={() => filterByBrand("vivo")}>Vivo</button>

          {state.map((item, index) => {
            return (
              <div key={index}>
                <div> {item.product_name}</div>
                <div>{item.brand}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterMyData;
