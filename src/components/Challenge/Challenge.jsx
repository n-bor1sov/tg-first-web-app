import React from "react"
import './Challenge.css'
import Button from "../Button/Button"

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
                <div className={"title"}>{item.challenge.title}</div>
                <div className={"description"}>{item.challenge.description}</div>
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
