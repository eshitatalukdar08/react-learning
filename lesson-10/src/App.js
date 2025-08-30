import './App.css';
import Square from './Components/Square';
import Input from './Components/Input';
import { useState } from 'react';

function App() {

   const [colorValue, setColorValue] = useState("");
   const [isDarkText, setIsDarkText] = useState(true);
  return (
    <div className="App">
     <Square 
     colorValue={colorValue}
     isDarkText={isDarkText} />
     <Input
     colorValue={colorValue}
     setColorValue={setColorValue}
     isDarkText={isDarkText} 
      setIsDarkText={setIsDarkText}
     />
    </div>
  );
}

export default App;
