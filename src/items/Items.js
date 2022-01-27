import React, { useState } from "react";
import Item from "../Item/Item";
import "./Items.css";

const Items = ({data,delTodo}) => {

  return (
    <div className="ItemsContainer">

    {data.map((dt)=><Item  key={dt.id} data={dt} delTodo={delTodo}></Item>)}
    
      
    </div>
  );
};

export default Items;
