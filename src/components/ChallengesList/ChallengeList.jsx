import React, { useState } from "react";
import "./ChallengeList.css";
import Challenge from "../Challenge/Challenge";
import { useTelegram } from "../../hooks/useTelegram";

const getClient = async (userID) => {
  let client = await fetch("http://45.131.96.241:5000/client/" + String(userID), {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return client.json();
};

const getChallenges = async () => {
  let challenges = await fetch("http://45.131.96.241:5000/challenges", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return challenges.json();
};

// const finishChallenge = async (userID, sp, xp, challengeID) => {
//     let result = await fetch("http://localhost:5000/reward", {
//       method: "post",
//       body: JSON.stringify({
//         uID : userID,
//         sPoints: sp,
//         xPoints: xp,
//         chID: challengeID
//         }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     result = await result.json();
//     if (result) {
//         console.log("Data saved succesfully");
//     }
//   };

const ChallengeList = () => {
  const {user} = useTelegram();
  const userID = user?.id;

  const [data, setData] = useState([]);
  const [challengeState, setChallengeState] = useState("all");

  React.useEffect(() => {
    const loadData = async () => {

      const client = await getClient(userID);
      const challenges = await getChallenges();

      let _data = []; 

    //   const goalCalc = (goal) => {
    //     let sumGoal = 0;
    //     for (var key in goal) {
    //       sumGoal += goal[key];
    //     }
    //     return sumGoal;
    //   };
    
    //   const progressCalc = (certain_hours, full_hours, goal) => {
    //     let sumProgress = 0;
    //     for (var key in goal) {
    //       if (goal[key] > 0) {
    //         if (key != "Summary Hours") {
    //           sumProgress += certain_hours[key];
    //         } else {
    //           sumProgress += full_hours;
    //         }
    //       }
    //     }
    //     return sumProgress;
    //   };
      challenges.forEach(async (e) => {
        // if(progressCalc(client.certain_hours, client.full_hours, e.goal) >= goalCalc(e.goal) && !client.challenge[e.id]) {
        //     await finishChallenge(client.id, e.sp, e.xp, e.id);
        // }
        _data.push({
          info: e,
          certain_hours: client.certain_hours,
          sum_hours: client.full_hours,
          isFinished: client.challenge[e.id],
        });
      });

      setData(_data);
    };

    loadData();
  }, []);

  const showMyChallenges = () => {
    setChallengeState("my");
  };

  const showAllChallenges = () => {
    setChallengeState("all");
  };

  return (
    <div className="container">
      <div className="challenge-list-head">
        <div className="title">Challenges</div>
        <div className="buttons-container">
          <button
            className={
              challengeState == "all" ? "button-pushed" : "button-base"
            }
            onClick={showAllChallenges}
          >
            All Challenges
          </button>
          <button
            className={challengeState == "my" ? "button-pushed" : "button-base"}
            onClick={showMyChallenges}
          >
            Completed
          </button>
        </div>
      </div>
      <div className={"list"}>
        {data
          .filter((e) => (e.isFinished == (challengeState == "all" ? false : true))) 
          .map(
            (
              item,
            ) => (
              <Challenge challenge={item} className={"item"} />
            ),
          )}
      </div>
    </div>
  );
};

export default ChallengeList;
