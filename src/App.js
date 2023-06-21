import { useEffect } from "react";
import './App.css';
import { useTelegram } from "./componemts/hooks/useTelegram";
import Header from "./componemts/Header/Header";
function App() {

  const {tg, onToggleButton} = useTelegram();

  useEffect( () => {
    tg.ready();
  }, [])


  return (
    <div className="App">
      <Header /> 
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
