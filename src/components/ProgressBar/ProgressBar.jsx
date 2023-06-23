import React, {useState} from "react"
//import './ProgressBar.css'

const ProgressBar = () => {

  const progress = 60;

  return (
    <div class="container">
      <div class="progress-bar">
        <div className="progerss-bar-fill" style={{ width: `${progress}%`}}></div>
      </div>
      <div className="progress-label">{progress}%</div>
    </div>
  )
};

export default ProgressBar;



