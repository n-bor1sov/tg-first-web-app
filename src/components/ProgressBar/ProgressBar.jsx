import React, {useState} from "react"
import './ProgressBar.css'

const ProgressBar = (hours, needHours) => {

  const [progress, setProgress] = useState(50);

  

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
    <div className="container">
      <div className="bar-name">Sport Hours</div>
      <div className="progress-bar">
         <div className="progress-bar-fill" style={{ width: `${progress}%`, backgroundColor: getColor()}}>{50}</div>
      </div>
    </div>
  )
};

export default ProgressBar;



