import React from 'react'

const SingleListProduct = (item) => {
  return (
    <div>
       <div className='border border-slate-800 m-4'>
      <div>i m single product for list view</div>
      <div>{item.id}</div>
      <div>{item.first_name} </div>
    </div>
    </div>
  )
}

export default SingleListProduct
