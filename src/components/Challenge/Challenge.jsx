import React from "react"
import './Challenge.css'
import ProgressBar from "../ProgressBar/ProgressBar";
import firstImage from "../static/0.png"

const images = [
    "../static/0.png",
    "https://drive.google.com/file/d/1Wm4C6J0E9CJsvvErnanLYtN1utRW9t0e/view?usp=drive_link",
    "https://drive.google.com/file/d/1zik4O9WGaKcgyBfs0gW28HS8dnWunWeu/view?usp=drive_link",
    "https://drive.google.com/file/d/1TmCxD6t9xt8DvIZVFtjNH7Mb2PeOr8Er/view?usp=drive_link"
]

const Challenge = (item) => {
    console.log(item);
    return (
        <div className={"challenge"}>
            <div className={"challenge-left-module"}>
                <img src={firstImage} alt="Сhallenge reward picture" />
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
