import React from "react"
import './Challenge.css'
import Button from "../Button/Button"

const Challenge = (challenge, className) => {

    const finishHandler = () => {
        
    }
    return (
        <div className={"challenge" + className}>
            <div className={"img"}/>
            <div className={"title"}>{challenge.title}</div>
            <div className={"points"}>{challenge.points}</div>
            <div className={"description"}>{challenge.description}</div>
            <Button className={"finish-chellange"} onClick={finishHandler}>
                Done
            </Button>
        </div>
    )
};

export default Challenge;
