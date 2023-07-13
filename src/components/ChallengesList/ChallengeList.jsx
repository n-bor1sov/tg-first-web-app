import React, { useState } from "react"
import './ChallengeList.css'
import Challenge from "../Challenge/Challenge";
import { useTelegram } from "../../hooks/useTelegram";



const challenges = [
    {id: 0, title:"Top Sportsmen S23", description: "Get 50 sport hours", points: 40, gems:10, need: 50},
    {id: 1, title:"Top Sportsmen Sum23", description: "Get 30 sport hours", points: 20, gems: 5, need: 30},
    {id: 2, title:"Table Tennis Competition", description: "Participate in the competition", points: 20, gems: 0, need:1},
    {id: 3, title:"Football lover", description: "Visit 20 Football trainings", points: 15, gems: 0, need: 20},
]

const ChallengeList = () => {

    let inProcess = [];
    let finished = [];

    const [challengeState, setChallengeState] = useState("all");

    const {dataBase} = useTelegram();
    
    const client = dataBase.users.find((e) => {
        return e.id == 894797521;
    });


    client.challenges.forEach(e => {
        if(e.isFinished) {
            finished.push({
                info: challenges[e.id],
                progress: e
            });
        } else {
            inProcess.push({
                info: challenges[e.id],
                progress: e
            });
        }
    })

    const [listContent, setListContent] = useState(inProcess.map(item => (
        <Challenge
            challenge={item}
            className={'item'}
        />
    )));

    const showMyChallenges = () => {
        setChallengeState("my");
        setListContent(finished.map(item => (
            <Challenge
                challenge={item}
                className={'item'}
            />
        )))
    }

    const showAllChallenges = () => {
        setChallengeState("all");
        setListContent(inProcess.map(item => (
            <Challenge
                challenge={item}
                className={'item'}
            />
        )));  
    }
    

    return (
        <div className="container">
            <div className="challenge-list-head">
                <div className="title">Challenges</div>
                <div className="buttons-container">
                    <button className={(challengeState == 'all') ? "button-pushed" : "button-base"} onClick={showAllChallenges}>All Challenges</button>
                    <button className={(challengeState == 'my') ? "button-pushed" : "button-base"} onClick={showMyChallenges}>My Challenges</button>
                </div>
            </div>
            <div className={"list"}>{listContent}</div>
        </div>
    )
};

export default ChallengeList;