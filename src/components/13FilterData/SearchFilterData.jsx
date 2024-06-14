import React, { useState } from "react";
import Data from "./mobileData.json";

const SearchFilterData = () => {
  const [data, setData] = useState(Data);
  const [text, setText] = useState("");

  const inputHandler = (e) => {
    const name = e.target.value;
    setText({ ...text, name });
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  const filterByText = (t) => {
    const filteredData = data.filter((item) => {
            return item.brand.toLowerCase().includes(t);
    });
    console.log(filteredData);
    setData(filteredData);
  };

  return (
    <div>
      <div>
        <h2>Create Crud app</h2>
        <form onSubmit={submitForm}>
          <label>name</label>
          <input type="text" name="brand" onChange={inputHandler} />
          <button
            type="submit"
            onClick={() => filterByText(text.name)}
          ></button>
        </form>

        {data.map((item, index) => {
          return (
            <div key={index}>
              <div> {item.product_name}</div>
              <div>{item.brand}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchFilterData;
