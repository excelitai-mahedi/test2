import React, { useState } from "react";
import "./Action.css";

const Action = ({getvalue}) => {
         const[number,setNumber]=useState(0);

    const increment= ()=>{
        let newnumber= number+1;
        setNumber(newnumber);
    }
    const decrement= ()=>{
        if(number>0){

            let newnumber= number-1;
            setNumber(newnumber);

        }
      
        
    }



  return (
    <div className="actionContainer">
      <div className="Actionclass">
        <button onClick={()=>{decrement()}} type="button" className="btn btn-danger me-2">
          -
        </button>
        <span className="valuespace">{number}</span>
        <button onClick={()=>{increment()}} type="button" className="btn btn-primary ms-2">
          +
        </button>
        <button onClick={()=>{getvalue(number)}} type="button" className="btn btn-success ms-2">
          add
        </button>
      </div>
    </div>
  );
};

export default Action;
