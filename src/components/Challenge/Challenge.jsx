import React from "react"
import './Challenge.css'
import Button from "../Button/Button"
import ProgressBar from "../ProgressBar/ProgressBar";

const Challenge = (item) => {
    console.log(item);
    const finishHandler = () => {

    }
    
    return (
        <div className={"challenge"}>
            <div className={"challenge-side-module"}>
                <div className={"img"}/>
                <div className={"points"}>{item.challenge.points}</div>
            </div>
            <div className={"challenge-mid-module"}>
                <ProgressBar
                    type = "Challenge Bar"
                    name = {item.challenge.info.title}
                    need = {item.challenge.info.need}
                    actual = {item.challenge.progress?.progress}
                    description = {item.challenge.info?.description}
                />  
            </div>
            <div className={"challenge-side-module"}>
                <Button className={"finish-chellange"} onClick={finishHandler}>
                    Done
                </Button>
            </div>
            
            
        </div>
    )
};

export default Challenge;
