import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import Items from "../items/Items";
import TODO from "../TODO/TODO";
import Action from "./Action/Action";
import "./Card.css";

const Card = () => {
  const [value, setvalue] = useState(0);
  const [data, settodo] = useState([]);
  const [newId, setNewId] = useState("");

  const getvalue = (number) => {
    setvalue(number);
  };
  var todo = [
    {
      id: Math.random() * 2,
      name: "my first task",
      status: 1,
    },

    {
      id: Math.random() * 16,
      name: "workong on react",
      status: 1,
    },
    {
      id: Math.random() * 16,
      name: "working on php",
      status: 1,
    },
    {
      id: Math.random() * 16,
      name: "sql practice",
      status: 1,
    },
  ];

  const addTodo = (val) => {
    let newdata2 = data;

    const getId =  parseInt((Math.random() * 1000000));
    const newTodo = { id: getId, name: val, status: 1 };
    const newArray = [newTodo,...newdata2];
   
    settodo(newArray);
    console.log(newArray);

    // setNewId(newId);
    // newdata2.push({ id: getId, name: val, status: 1 });
    // settodo(newdata2);

  };

  const delTodo = (id) => {
  
    let newdata = data.filter((el) => el.id != id);
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
        <Items data={data} delTodo={delTodo}/>
      </div>
    </div>
  );
};

export default Card;
