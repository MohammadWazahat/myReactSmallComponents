import React, { useRef, useState } from "react";

const ImageUploader = () => {
//   const inputRef = useRef(null);
  //    console.log(inputRef)

  const [img, setImg] = useState();

  const handleImgChange = (e) => {
    console.log(e.target.files[0]);
    setImg(e.target.files[0]);
    // console.log(e.target.value);
  };

  //  const handleImgClick = () => {
  //     inputRef.current.onClick ;
  //     console.log(inputRef.current.onClick)
  //  }
     console.log(img);
    //  console.log(URL.createObjectURL)


  return (
    <div>
      i am image uplaoad der
      {/* <div onClick={handleImgClick} className='border border-slate-800 h-10 '>
              
      </div> */}
      <div className="h-72 w-72 border border-slate-800">
        {img ? (
          <img
            src={URL.createObjectURL(img)}
            alt=""
            className="h-72 w-72 border border-slate-800"
          />
        ) : (
          <img src="" alt="" />
        )}
      </div>
      <div className="border border-slate-800 m-4 p-2">
        {/* <input type="file" ref={inputRef} onChange={handleImgChange} /> */}
        <input type="file" onChange={handleImgChange} />
      </div>
     
      

    </div>
  );
};

export default ImageUploader;
