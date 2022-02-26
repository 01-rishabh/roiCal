
import { useState } from 'react';
import './App.css';
import MainCard from './Components/MainCard';

function App() {
  const [current, setCurrent] = useState("CAKE")

  const mode = () => {
    if(current === "USD"){
      setCurrent("CAKE")
    }else{
      setCurrent("USD")
    }
  }

  return (
    <div className="App">
      <MainCard current={current} mode={mode} />
    </div>
  );
}

export default App;
