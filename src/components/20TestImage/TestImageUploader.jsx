import axios from "axios";
import React, { useState } from "react";

const TestImageUploader = () => {
  const [img, setImg] = useState();
  const [values, setValues] = useState({
    img : "" ,
  });

  const handleImgChange = (e) => {
    console.log(e.target.value);
    setValues(e.target.value);
  };



  const submitForm = (e) => {
    e.preventDefault();
    console.log("i am submitted");
    axios
      .post("http://localhost:3006/users", values)
      .then((res) => {
        console.log(res);
       
      })
      .catch((err) => console.log(err));
  };

  console.log(values)
  return (
    <div>
      <div>
        <form onSubmit={submitForm}>
          <input
            type="text"
            name="newImg"
            id="newImg"
            onChange={handleImgChange}
          />
          <button type="submit">submit</button>
        </form>
      </div>
      <div>
        <img
          src={values}
          alt=""
          className="h-72 w-72 border border-slate-800 m-8"
        />
      </div>
    </div>
  );
};

export default TestImageUploader;
