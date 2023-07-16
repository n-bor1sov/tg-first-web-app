import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ChallengeList from "./components/ChallengesList/ChallengeList";
import BarContainer from "./components/BarsContainer/BarContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <BarContainer />
      <ChallengeList />
    </div>
  );
}

export default App;
