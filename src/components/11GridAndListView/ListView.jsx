import React from 'react'
import SingleListProduct from './SingleListProduct'

const ListView = (user) => {
  const data = user.user ;
  return (
    <div>
      <div className="flex flex-col gap-4">
          {data.map((item, index) => {
        return <SingleListProduct key={index} {...item}/>
      })}
    </div>
    </div>
  )
}

export default ListView
