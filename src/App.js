import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './componemts/hooks/useTelegram';
function App() {

  const {tg, onToggleButton} = useTelegram();

  useEffect( () => {
    tg.ready();
  }, [])


  return (
    <div className="App">
     There will be WebApp
     <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
