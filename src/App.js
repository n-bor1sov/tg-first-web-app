import { useEffect } from "react";
import './App.css';
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import ChallengeList from "./components/ChallengesList/ChallengeList";
import ProgressBar from "./components/ProgressBar/ProgressBar";

function App() {

  const {tg} = useTelegram();

  useEffect( () => {
    tg.ready();
  }, [])


  return (
    <div className="App">
      <Header />
      {/* <ProgressBar /> */}
      <ChallengeList />
    </div>
  );
}

export default App;
