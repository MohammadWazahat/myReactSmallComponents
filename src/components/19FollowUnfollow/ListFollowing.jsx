import React, { useState } from 'react'

const ListFollowing = (x) => {
    console.log(x)
    const [ followList , setFollowList ] = useState(x);

    console.log(followList);
  return (
    <div>
      i am list of following
      {followList.map((item, index) => {
          return (
            <div key={index} className="border border-slate-700 m-2 p-2">
              <div> {item.user_id}</div>
              <div>{item.name}</div>
              <button
                className="border border-slate-700 m-2 p-2"
                // onClick={() => AddToFollowing({ ...item })}
              >
                follow
              </button>
            </div>
          );
        })}
    </div>
  )
}

export default ListFollowing
