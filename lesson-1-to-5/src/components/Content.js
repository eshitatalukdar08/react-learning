export default function Content(){
    const handleNameChange=()=>{
     const names=['Eshita','John','Jane','Doe'];
     const int=Math.floor(Math.random()*4);
     return (names[int]);
   }

   const handleClick=()=>{
    console.log("Clicked the button");
   }

   const handleClick2=(name)=>{
    console.log(`${name} was clicked`);
   }
   const handleClick3=(e)=>{
    console.log(e.target.innerText);
   }
    return(
      <main>
        <p onDoubleClick={handleClick}>Hello {handleNameChange()}!</p>
        <button onClick={handleClick}>Click it!</button>
        <br/>
        <button onClick={() => handleClick2('Eshita')}>Click it 2!</button>
        <br/>
        <button onClick={(e) => handleClick3(e)}>Click it 3!</button>
      </main>
    );
}