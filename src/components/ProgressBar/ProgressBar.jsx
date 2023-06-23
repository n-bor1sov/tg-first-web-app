import React, {useState} from "react"
//import './ProgressBar.css'

const ProgressBar = () => {

  const progerss = 60;

  return (
    <div class="container">
      <div class="progress-bar">
        <div className="progerss-bar-fill" style={{ width: `${progerss}%`}}></div>
      </div>
      <div className="progress-label">{progress}%</div>
    </div>
  )
};

export default ProgressBar;



