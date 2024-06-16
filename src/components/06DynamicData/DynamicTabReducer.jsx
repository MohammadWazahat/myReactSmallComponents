import React, { useReducer} from "react";

const DynamicTabReducer = () => {
    const imgs = [1, 2, 3, 4, 5]; // this data can be get by some api in props
    // no. above can be replaced by the images or any data
   

const initialState= imgs[0] ;
const reducer = (state,action) => {
console.log(action.payload)
return action.payload ;
}


const [state , dispatch ] = useReducer(reducer,initialState)
const tabData =(item)=>{
    console.log(item)
    dispatch({
        type : "DISPLAY",
        payload : item,
    })
}
console.log(state)

  return (
    <>
    <h2>i m dynamic tab with reducer</h2>
    <div className="border border-slate-900 flex flex-col gap-8" >
      <div  className="border border-slate-900 flex gap-8">
        {imgs.map((item, index) => {
          return (
            <div
              className="border border-slate-900 bg-red-400 h-10 w-20 "
              key={index}
              onClick={() => tabData(item)}
            >
              {item}
            </div>
          );
        })}
       
      </div>
      <div className="border border-slate-900 bg-red-400 ">
        My no changes as you click the tab above 
       {state}
      </div>
      </div>
    </>
  )
}

export default DynamicTabReducer
