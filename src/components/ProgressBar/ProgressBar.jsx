import React from "react"
//import './ProgressBar.css'

const ProgressBar = () => {
  return (
    <div class="progress-bar">
        <div class="label" data-count="60">100%</div>
        <div class="line" style="width:500px">
            <span></span>
        </div>
    </div>
  )
};

export default ProgressBar;
