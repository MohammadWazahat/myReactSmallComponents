import React, { useState } from "react";
import Data from "./usersProfile.json";
import ListFollowing from "./ListFollowing";

const FollowUnfollow = () => {
    
   const [user,setUser] = useState([]);
  const AddToFollowing = (x) => {
    // console.log(x);
    setUser([...user , x])
  };
//   console.log(Data);
//   console.log(user)

  return (
    <div>
      i am follow un follow
      <ListFollowing {...user} />
      <div>
        {Data.map((item, index) => {
          return (
            <div key={index} className="border border-slate-700 m-2 p-2">
              <div> {item.user_id}</div>
              <div>{item.name}</div>
              <button
                className="border border-slate-700 m-2 p-2"
                onClick={() => AddToFollowing({ ...item })}
              >
                follow
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FollowUnfollow;
