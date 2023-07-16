import React, { useState } from "react";
import "./Challenge.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import firstImage from "../static/0001.png";
import secondImage from "../static/1.png";
import thirdImage from "../static/2.png";
import fourthImage from "../static/3.png";

const images = {
    "0001": firstImage,
    "8356": secondImage,
    "0003": thirdImage,
    "0004": fourthImage,
};

const Challenge = (item) => {
  console.log(item);

  const goalCalc = (goal) => {
    let sumGoal = 0;
    for (var key in goal) {
      sumGoal += goal[key];
    }
    return sumGoal;
  };

  const progressCalc = (certain_hours, full_hours, goal) => {
    console.log(certain_hours, full_hours, goal)
    let sumProgress = 0;
    for (var key in goal) {
      //console.log(certain_hours)
      if (goal[key] > 0) {
        if (key != "Summary Hours") {
          sumProgress += certain_hours[key];
        } else {
          sumProgress += full_hours;
        }
      }
    }
    return sumProgress;
  };

  const [box, setBox] = useState("short");

  const expandBox = () => {
    if(box == "short") {
      setBox("long");
    } else {
      setBox("short")
    }
  }

  console.log(item);
  return (
    <div className={box =="short" ? "challenge-short" : "challenge-long"}>
      <div className="row">
        <div className={"challenge-left-module"}>
          <img src={images[item.challenge.info.id]} alt="Сhallenge reward"/>
          <div className="rewards">
            <div className={"x-points"}>{item.challenge.info.xp} XP</div>
            <div className={"sport-points"}>{item.challenge.info.sp} SP</div>
          </div>
        </div>
        <div className={"challenge-right-module"}>
          <div className="button-container">
            <button onClick={expandBox} className={box == "short" ? "expand-button" : "decrease-button"}>{box == "short" ? "More" : "Less"}</button>
          </div>
          <ProgressBar
            type="Challenge Bar"
            name={item.challenge.info.name}
            need={goalCalc(item.challenge.info.goal)}
            actual={progressCalc(
              item.challenge.certain_hours,
              item.challenge.sum_hours,
              item.challenge.info.goal,
            )}
            description={box == "short" ? item.challenge.info?.short_description : ""}
          />
        </div>
      </div>
      <div className={box == "short" ? "full-description-hide" : "full-description-show"}>
        {item.challenge.info.full_description}
      </div>
    </div>
  );
};

export default Challenge;
