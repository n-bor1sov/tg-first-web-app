import React, { useState } from "react"
import './ChallengeList.css'
import Challenge from "../Challenge/Challenge";
import { useTelegram } from "../../hooks/useTelegram";
import Button from "../Button/Button";


var dataBase = {
    users: [ {id: 894797521, 
        challenges: [{id: 0, progress: 5, need: 10, isFinished: false}, {id: 1, progress: 10, need: 10, isFinished: true}, {id: 2, progress: 10, need: 5000, isFinished: false}, {id: 3, progress: 0, need: 1, isFinished: false}]
    }
    ]
}

const challenges = [
    {id: 0, title:"Swimmer", description: "Get 10 hours in the swimming pool", points: 10, need: 10},
    {id: 1, title:"MJ", description: "Get 10 hours on the Basketball", points: 15, need: 10},
    {id: 2, title:"The Goat", description: "Get 5000 hours on the Basketball", points: 15, need:50},
    {id: 3, title:"Ben Simons", description: "Get 1 minute on the Basketball", points: 15, need: 1},
]

const ChallengeList = () => {

    let inProcess = [];
    let finished = [];

    const {user} = useTelegram();
    
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
    let challengesStatus = "inProcess";

    const [listContent, setListContent] = useState(inProcess.map(item => (
        <Challenge
            challenge={item}
            className={'item'}
        />
    )));

    const showMyChallenges = () => {
        setListContent(finished.map(item => (
            <Challenge
                challenge={item}
                className={'item'}
            />
        )))
    }

    const showAllChallenges = () => {
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
                    <Button onClick={showAllChallenges}>All Challenges</Button>
                    <Button onClick={showMyChallenges}>My Challenges</Button>
                </div>
            </div>
            <div className={"list"}>{listContent}</div>
        </div>
    )
};

export default ChallengeList;
