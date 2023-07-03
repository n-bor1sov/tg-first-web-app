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
            <div className={"challenge-left-module"}>
                <img src={"../static/" + item.challenge.info.id + ".png"} alt="There should be a challenge reward picture" />
                <div className="rewards">
                    <div className={"points"}>{item.challenge.info.points} points</div>
                    <div className={"gems"}>{item.challenge.info.gems} gems</div>
                </div>
            </div>
            <div className={"challenge-right-module"}>
                <ProgressBar
                    type = "Challenge Bar"
                    name = {item.challenge.info.title}
                    need = {item.challenge.info.need}
                    actual = {item.challenge.progress?.progress}
                    description = {item.challenge.info?.description}
                />  
            </div>
        </div>
    )
};

export default Challenge;
