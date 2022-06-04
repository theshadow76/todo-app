import React, { useState } from "react";
import "./App.css";
import Addnewtodo from "./components/addnewtodo";
import Singletodo from "./components/singletodo";

const App = () => {
  const [alltodos, setalltodos] = useState([]);
  console.log(alltodos);
  /*let aarr = ["Hola", "Buenas", "Como estas", "angular", "react"];
  let newv2 = aarr.slice(1, 4);
  console.log(newv2)
  /*let aarr2 = ["d", "e", "f"]
  let newArray = aarr.concat(aarr2)
  let newv1 = aarr.includes('g')
  let popMethode = aarr2.shift()
  let pushmethode = aarr.push("hello", "Hi")
  let newv2 = aarr.slice(1, 3);
  console.log(newv2);
  console.log(pushmethode);*/
  console.log(alltodos)
  const handledelete = (item) => {
    const temp = alltodos.filter((x) => x !== item)
    setalltodos(temp)
  }
  return (
    <div className="App">
      <div>
        <h1>Todo App</h1>
        <Addnewtodo alltodos={alltodos} setalltodos={setalltodos} />
        {alltodos.length > 0? alltodos.map((item) => <Singletodo item = {item} handledelete={handledelete}/>): "please add a todo"}
      </div>
    </div>
  );
};

export default App;
