import React, { useState } from "react";
import GridView from "./GridView";
import ListView from "./ListView";

const ToggleGridNList = () => {
  const myUser = [
    {
      id: 1,
      first_name: "Erwin",
      last_name: "Biset",
      email: "ebiset0@dagondesign.com",
      gender: "Male",
    },
    {
      id: 2,
      first_name: "Amalle",
      last_name: "Bilovus",
      email: "abilovus1@scientificamerican.com",
      gender: "Female",
    },
    {
      id: 3,
      first_name: "Kamillah",
      last_name: "Fotitt",
      email: "kfotitt2@nhs.uk",
      gender: "Female",
    },
    {
      id: 4,
      first_name: "Aloysia",
      last_name: "Burmingham",
      email: "aburmingham3@oracle.com",
      gender: "Female",
    },
  ];
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
