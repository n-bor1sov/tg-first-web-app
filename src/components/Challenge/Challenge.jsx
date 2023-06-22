import React from "react"
import './Challenge.css'
import Button from "../Button/Button"

const Challenge = (item) => {
    console.log(challenge);
    const finishHandler = () => {

    }
    
    return (
        <div className={"challenge"}>
            <div className={"img"}/>
            <div className={"title"}>{item.challenge.title}</div>
            <div className={"points"}>{item.challenge.points}</div>
            <div className={"description"}>{item.challenge.description}</div>
            <Button className={"finish-chellange"} onClick={finishHandler}>
                Done
            </Button>
        </div>
    )
};

export default Challenge;
