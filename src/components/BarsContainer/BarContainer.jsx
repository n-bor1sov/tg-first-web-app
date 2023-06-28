import React, { useState } from "react"
import './BarContainer.css'
import ProgressBar from "../ProgressBar/ProgressBar";
import { useTelegram } from "../../hooks/useTelegram";

const BarContainer = () => {

    return (
        <div className={"list"}>
            <ProgressBar
                type = "Sport hours"
                name = "Sport hours"
                needHours = "30"
                hours = "12"
                description = ""
            />   
            <ProgressBar
                type = "Sport points"
                name = "Sport points"
                needPoints = "1000"
                points = "120"
                description = ""
            />   
        </div>
  )
};

export default BarContainer;
