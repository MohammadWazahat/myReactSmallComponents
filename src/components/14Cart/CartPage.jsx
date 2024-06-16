import React, { useEffect, useState } from 'react'

const CartPage = (newDatas) => {
    
  
console.log(newDatas)
const arr = {...newDatas}
console.log(arr.newDatas)
const newArr = arr.newDatas
console.log(newArr)
// console.log(data.newDatas)

  return (
    <div>
        {newArr.map((item,index)=>{
        return <div>{item.color}</div>
      })}
    </div>
  )
}

export default CartPage
