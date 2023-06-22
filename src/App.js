import { useEffect } from "react";
import './App.css';
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import ChallengeList from "./components/ChallengesList/ChallengeList";

function App() {

  const {tg, onToggleButton} = useTelegram();

  useEffect( () => {
    tg.ready();
  }, [])


  return (
    <div className="App">
      <Header />
      <ChallengeList />
    </div>
  );
}

export default App;
