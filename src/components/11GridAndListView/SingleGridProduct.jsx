import React from 'react'

const SingleGridProduct = (item) => {
    
  return (
    <div className='border border-slate-800 m-4'>
      <div>i m single product for grid view</div>
      <div>{item.id}</div>
      <div>{item.first_name} </div>
    </div>
  )
}

export default SingleGridProduct
