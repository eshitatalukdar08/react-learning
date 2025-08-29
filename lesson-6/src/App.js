import './App.css';
import Header from './Components/Header.js';
import Content from './Components/Content.js';
import Footer from './Components/Footer.js';

function App() {
  
   const name="Eshita";

  return (
    <div className="App">
      <Header />
      <Content/>
      <Footer />
    </div>
  );
}

export default App;
