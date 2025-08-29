import { useState } from "react";

export default function Content(){

  const [name,setName]=useState("Eshita");  
  const [count,setCount]=useState(0);

    const handleNameChange =()=>{
     const names=['Eshita','John','Jane','Doe'];
     const int=Math.floor(Math.random()*4);
     setName(names[int]);
   }

   const handleClick=()=>{
    setCount(count+1);
      console.log(count);
   }

   const handleClick2=(name)=>{
    console.log(`${name} was clicked`);
   }
   const handleClick3=(e)=>{
    console.log(e.target.innerText);
   }
    return(
      <main>
        <p onDoubleClick={handleClick}>Hello {name}!</p>
        <button onClick={handleNameChange}>Change name</button>
        <br/>
        <button onClick={handleClick}>Click it 2!</button>
        <br/>
        <button onClick={(e) => handleClick3(e)}>Click it 3!</button>
      </main>
    );
}