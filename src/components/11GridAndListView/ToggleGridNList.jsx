import React, { useState } from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import Data from "../../../public/dummyJson.json";

const ToggleGridNList = () => {
  const myUser = Data;
   const [user, setUser] = useState(myUser);
  const [view, setView] = useState(true);

  return (
    <div>
      toggle grid and list
      <button onClick={()=>{setView(true)}} >grid</button>
      <button onClick={()=>{setView(false)}}>list</button>
      {view ? <GridView user={user} /> : <ListView user={user} />}
    </div>
  );
};

export default ToggleGridNList;
