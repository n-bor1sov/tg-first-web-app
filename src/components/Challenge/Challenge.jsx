import React from "react"
import './Challenge.css'
import ProgressBar from "../ProgressBar/ProgressBar";
import firstImage from "../static/0.png"
import secondImage from "../static/1.png"
import thirdImage from "../static/2.png"
import fourthImage from "../static/3.png"


const images = [
    firstImage,
    secondImage,
    thirdImage,
    fourthImage
]

const Challenge = (item) => {
    console.log(item);
    return (
        <div className={"challenge"}>
            <div className={"challenge-left-module"}>
                <img src={images[item.challenge.info.id]} alt="Сhallenge reward" />
                <div className="rewards">
                    <div className={"points"}>{item.challenge.info.points} points</div>
                    <div className={"gems-ch"}>{item.challenge.info.gems} gems</div>
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