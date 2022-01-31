import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Items from "../items/Items";
import TODO from "../TODO/TODO";
import Action from "../Action/Action";
import "./Card.css";

const Card = () => {
  const [value, setvalue] = useState(0);
  const [data, settodo] = useState([]);
 

  const getvalue = (number) => {
    setvalue(number);
  };
    
    useEffect(()=>{
   let retrivetodos = JSON.parse(localStorage.getItem('todos'));
    if(retrivetodos) settodo(retrivetodos);

    },[])
    useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(data));

    },[data])


  const addTodo = (val) => {
    let newdata2 = data;

    const getId =  parseInt((Math.random() * 1000000));
    const newTodo = { id: getId, name: val, status: 0 };
    const newArray = [newTodo,...newdata2];
   
    settodo(newArray);
    // console.log(newArray);

    // setNewId(newId);
    // newdata2.push({ id: getId, name: val, status: 1 });
    // settodo(newdata2);

  };

  const delTodo = (id) => {
  
    let newdata = data.filter((el) => el.id != id);
    settodo(newdata);
  };
  const doneTodo= (id)=>{
 let newdata=data.map((el)=>{
if(el.id===id){ el.status= 1;}

return el;

 })

 settodo(newdata);

  };

  useEffect(() => {
    // settodo(todo);
  }, []);

  return (
    <div className="cointainer">
      <div className="newcard">
        <h2 className="text-center">TO DO</h2>
        <TODO addTodo={addTodo} />
        <Items doneTodo={doneTodo} data={data} delTodo={delTodo}/>
      </div>
      
    </div>
  );
};

export default Card;
