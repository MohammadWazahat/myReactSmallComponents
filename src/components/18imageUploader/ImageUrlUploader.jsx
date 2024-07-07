import React, { useRef, useState } from "react";
import Data from './images.json'

const ImageUrlUploader = () => {
  const [img, setImg] = useState();
 const[values,setValues] = useState();

  // const handleImgChange = (e) => {
  //   setImg(e.target.files[0]);
  //   console.log(e.target.value);
  // };
  const handleImgChange = (e) => {
    console.log(e.target.value);
    setValues(e.target.value)
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("i am submitted");
    console.log(values);
  };

  console.log(Data[0].images);
const  myImage = Data[0].images ;
  console.log(myImage)
  return (
    <div>
        <div>
            <img src={myImage} alt="" />
        </div>
        <div>
        <img
              src={values}
              alt=""
              className="h-72 w-72 border border-slate-800"
            />
        </div>
      <div>
        i am image uplaoad der url
        {/* <div className="h-72 w-72 border border-slate-800">
          {img ? (
            <img
              src={values}
              alt=""
              className="h-72 w-72 border border-slate-800"
            />
          ) : (
            <img src="" alt="" />
          )}
        </div> */}
        {/* <div className="border border-slate-800 m-4 p-2">
        <input type="file" onChange={handleImgChange} />
      </div> */}
        <div className="border border-slate-800 m-4 p-2">
          <form onSubmit={submitForm}>
            <input type="text" onChange={handleImgChange} />
            <button className="border border-slate-800 m-4 p-2" type="submit">submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImageUrlUploader;
