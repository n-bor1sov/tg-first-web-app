import React, {useState} from "react"
//import './ProgressBar.css'

const ProgressBar = () => {

  const [progress, setProgress] = useState(0);

  const handleButtonClick = () => {
    if (progress < 100) {
      setProgress(progress + 20);
    }
  }

  const handleButtonReset = () => {
    setProgress(0);
  }

  const getColor = () => {
    if(progress < 40) {
      return "#ff0000";
    } else if (progress < 70) {
      return "#ffa500";
    } else {
      return "#2ecc71";
    }
  }

  return (
    <div class="container">
      <div class="progress-bar">
        <div className="progerss-bar-fill" style={{ width: `${progress}%`, backgroundColor: getColor()}}></div>
      </div>
      <div className="progress-label">{progress}%</div>
      <button className="button" onClick={handleButtonClick}>Progress</button>
      <button className="button" onClick={handleButtonReset}>Reset</button>
    </div>
  )
};

export default ProgressBar;



