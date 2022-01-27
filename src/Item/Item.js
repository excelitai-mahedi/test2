import React from "react";
import  "./Item.css";

const Item = ({data,delTodo}) => {

  console.log(data);
 
  return (
    <div className="itemContainer  bg-primary mx-5  my-2">
      <div className="ms-3">
        <span className="text-light">{data.name}</span>
      </div> 

      <div>
        <button type="submit" className="btn btn-primary">
          <i className="fas fa-check-circle"></i>
        </button>
        <button onClick={()=>{delTodo(data.id)}} type="submit" className="btn btn-primary">  
          <i className="fas fa-times-circle "></i>
        </button>
      </div>
    </div>
  );
};

export default Item;
