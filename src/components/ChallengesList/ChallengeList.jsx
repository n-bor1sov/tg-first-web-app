import React, { useState } from "react";
import "./ChallengeList.css";
import Challenge from "../Challenge/Challenge";
import { useTelegram } from "../../hooks/useTelegram";

// const getClient = async (userID) => {
//   let client = await fetch("http://45.131.96.241:5000/client/" + String(userID), {
//     method: "get",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   return client.json();
// };

const getClient = (userID) => {
  console.log(userID);
  const user = {
    state: 'default',
    id: 894797521,
    login: 'n.borisov@innopolis.university',      
    password: 'nik30BOR09',
    notifications: 'Off',
    Xp: 20,
    Sp: 5,
    challenge: { '3422': false, '7732': true, '3646': false , '6443': false, '2927': false, '3046': false, '2243': false, '6344': false},
    certain_hours: {
      'General Physical Training': 10,
      'Follow the Bars - Running': 0,
      'Social Dance': 0,
      'Functional LCD': 0,
      'RAGE': 0,
      'Boxing': 0,
      'Table tennis - Advanced': 18,
      'Volleyball': 0,
      'RAGE - Knights': 0,
      'Street Dance': 0,
      'Football': 0,
      'Sambo': 0,
      'Tricking club': 0,
      'Basketball': 0,
      'Yoga - Stretching': 0,
      'Tennis': 0,
      'Yoga - Strength': 0,
      'Badminton - Advanced': 0,
      'Badminton - Beginners': 0,
      'Mixed sports': 0,
      'Park Run - 5 Verst': 0,
      Cricket: 0,
      'Extra sport events': 4
    },
    full_hours: 32
  }
  return user;
};

// const getChallenges = async () => {
//   let challenges = await fetch("http://45.131.96.241:5000/challenges", {
//     method: "get",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   return challenges.json();
// };

const getChallenges = () => {
  return [  
    {
      model: 'challenge',
      name: 'Top Sportsman S23',
      short_description: 'Get 50 sport hours',
      full_description: 'To complete the challenge Top Sportsmen you need to get 50 sport hours during the Spring23 semester. \n' +
        'Top 10 students from this challenge will get additional reward - 10 xp and 2 gem\n' +
        'Note: In case if several people has the same amount of hour, the one who got them faster will be in the higher position',
      xp: 40,
      sp: 10,
      goal: {
        'General Physical Training': 0,
        'Follow the Bars - Running': 0,
        'Social Dance': 0,
        'Functional LCD': 0,
        'RAGE': 0,
        'Boxing': 0,
        'Table tennis - Advanced': 0,
        'Volleyball': 0,
        'RAGE - Knights': 0,
        'Street Dance': 0,
        'Football': 0,
        'Sambo': 0,
        'Tricking club': 0,
        'Basketball': 0,
        'Yoga - Stretching': 0,
        'Tennis': 0,
        'Yoga - Strength': 0,
        'Badminton - Advanced': 0,
        'Badminton - Beginners': 0,
        'Mixed sports': 0,
        'Park Run - 5 Verst': 0,
        'Cricket': 0,
        'Extra sport events': 0,
        'Full hours': 50
      },
      id: '3422'
    },
    {
      model: 'challenge',
      name: 'Top Sportsman Sum23',
      short_description: 'Get 25 sport hours',
      full_description: 'To complete the challenge Top Sportsmen you need to get 30 sport hours during the Summer23 semester. \n' +
        'Top 10 students from this challenge will get additional reward - 10 xp and 1 gem\n' +
        'Note: In case if several people has the same amount of hour, the one who got them faster will be in the higher position',
      xp: 20,
      sp: 5,
      goal: {
        'General Physical Training': 0,
        'Follow the Bars - Running': 0,
        'Social Dance': 0,
        'Functional LCD': 0,
        'RAGE': 0,
        'Boxing': 0,
        'Table tennis - Advanced': 0,
        'Volleyball': 0,
        'RAGE - Knights': 0,
        'Street Dance': 0,
        'Football': 0,
        'Sambo': 0,
        'Tricking club': 0,
        'Basketball': 0,
        'Yoga - Stretching': 0,
        'Tennis': 0,
        'Yoga - Strength': 0,
        'Badminton - Advanced': 0,
        'Badminton - Beginners': 0,
        'Mixed sports': 0,
        'Park Run - 5 Verst': 0,
        'Cricket': 0,
        'Extra sport events': 0,
        'Full hours': 25
      },
      id: '7732'
    },
    {
      model: 'challenge',
      name: 'Football lover',
      short_description: 'Visit 20 Football trainings',
      full_description: 'To complete the Football lover challenge you need to participate in 20 Football training sessions during Fall 2023 semester',    xp: 20,
      sp: 0,
      goal: {
        'General Physical Training': 0,
        'Follow the Bars - Running': 0,
        'Social Dance': 0,
        'Functional LCD': 0,
        'RAGE': 0,
        'Boxing': 0,
        'Table tennis - Advanced': 0,
        'Volleyball': 0,
        'RAGE - Knights': 0,
        'Street Dance': 0,
        'Football': 40,
        'Sambo': 0,
        'Tricking club': 0,
        'Basketball': 0,
        'Yoga - Stretching': 0,
        'Tennis': 0,
        'Yoga - Strength': 0,
        'Badminton - Advanced': 0,
        'Badminton - Beginners': 0,
        'Mixed sports': 0,
        'Park Run - 5 Verst': 0,
        'Cricket': 0,
        'Extra sport events': 0,
        'Full hours': 0
      },
      id: '3646'
    },
    {
      model: 'challenge',
      name: 'Rage knight',
      short_description: 'Take part in 20 Rage trainings',
      full_description: 'To complete the Rage knight challenge you need to take part in 20 Rage trainings during one semester',
      xp: 20,
      sp: 0,
      goal: {
        'General Physical Training': 0,
        'Follow the Bars - Running': 0,
        'Social Dance': 0,
        'Functional LCD': 0,
        'RAGE': 40,
        'Boxing': 0,
        'Table tennis - Advanced': 0,
        'Volleyball': 0,
        'RAGE - Knights': 0,
        'Street Dance': 0,
        'Football': 0,
        'Sambo': 0,
        'Tricking club': 0,
        'Basketball': 0,
        'Yoga - Stretching': 0,
        'Tennis': 0,
        'Yoga - Strength': 0,
        'Badminton - Advanced': 0,
        'Badminton - Beginners': 0,
        'Mixed sports': 0,
        'Park Run - 5 Verst': 0,
        'Cricket': 0,
        'Extra sport events': 0,
        'Full hours': 0
      },
      id: '6443'
    },
    {
      model: 'challenge',
      name: 'Street dance lover',
      short_description: 'Take part in 20 Street dance trainings',
      full_description: 'To complete the Street dance lover challenge you need to take part in 20 Street dance trainings during Fall 2023 semester',  
      xp: 20,
      sp: 0,
      goal: {
        'General Physical Training': 0,
        'Follow the Bars - Running': 0,
        'Social Dance': 0,
        'Functional LCD': 0,
        'RAGE': 0,
        'Boxing': 0,
        'Table tennis - Advanced': 0,
        'Volleyball': 0,
        'RAGE - Knights': 0,
        'Street Dance': 40,
        'Football': 0,
        'Sambo': 0,
        'Tricking club': 0,
        'Basketball': 0,
        'Yoga - Stretching': 0,
        'Tennis': 0,
        'Yoga - Strength': 0,
        'Badminton - Advanced': 0,
        'Badminton - Beginners': 0,
        'Mixed sports': 0,
        'Park Run - 5 Verst': 0,
        'Cricket': 0,
        'Extra sport events': 0,
        'Full hours': 0
      },
      id: '2927'
    },
    {
      model: 'challenge',
      name: 'Badminton guru',
      short_description: 'Take part in 20 badminton training sessions',
      full_description: 'To complete the Badminton guru challenge you need to take part in 20 badminton training sessions during Fall 2023 semester',
      xp: 20,
      sp: 0,
      goal: {
        'General Physical Training': 0,
        'Follow the Bars - Running': 0,
        'Social Dance': 0,
        'Functional LCD': 0,
        'RAGE': 0,
        'Boxing': 0,
        'Table tennis - Advanced': 0,
        'Volleyball': 0,
        'RAGE - Knights': 0,
        'Street Dance': 0,
        'Football': 0,
        'Sambo': 0,
        'Tricking club': 0,
        'Basketball': 0,
        'Yoga - Stretching': 0,
        'Tennis': 0,
        'Yoga - Strength': 0,
        'Badminton - Advanced': 20,
        'Badminton - Beginners': 20,
        'Mixed sports': 0,
        'Park Run - 5 Verst': 0,
        'Cricket': 0,
        'Extra sport events': 0,
        'Full hours': 0
      },
      id: '3046'
    },
    {
      model: 'challenge',
      name: 'Social dance lover',
      short_description: 'Take part in 20 Social dance training sessions',
      full_description: 'To complete the Social dance lover challenge you need to take part in 20 Social dance training sessions during Fall 2023 semester',
      xp: 20,
      sp: 0,
      goal: {
        'General Physical Training': 0,
        'Follow the Bars - Running': 0,
        'Social Dance': 40,
        'Functional LCD': 0,
        'RAGE': 0,
        'Boxing': 0,
        'Table tennis - Advanced': 0,
        'Volleyball': 0,
        'RAGE - Knights': 0,
        'Street Dance': 0,
        'Football': 0,
        'Sambo': 0,
        'Tricking club': 0,
        'Basketball': 0,
        'Yoga - Stretching': 0,
        'Tennis': 0,
        'Yoga - Strength': 0,
        'Badminton - Advanced': 20,
        'Badminton - Beginners': 20,
        'Mixed sports': 0,
        'Park Run - 5 Verst': 0,
        'Cricket': 0,
        'Extra sport events': 0,
        'Full hours': 0
      },
      id: '2243'
    },
    {
      model: 'challenge',
      name: 'PE enthusiast',
      short_description: 'Take part in 20 General physical training sessions',
      full_description: 'To complete the PE enthusiast challenge you need to take part in 20 General physical training sessions during Fall 2023 semester',
      xp: 20,
      sp: 0,
      goal: {
        'General Physical Training': 40,
        'Follow the Bars - Running': 0,
        'Social Dance': 0,
        'Functional LCD': 0,
        'RAGE': 0,
        'Boxing': 0,
        'Table tennis - Advanced': 0,
        'Volleyball': 0,
        'RAGE - Knights': 0,
        'Street Dance': 0,
        'Football': 0,
        'Sambo': 0,
        'Tricking club': 0,
        'Basketball': 0,
        'Yoga - Stretching': 0,
        'Tennis': 0,
        'Yoga - Strength': 0,
        'Badminton - Advanced': 0,
        'Badminton - Beginners': 0,
        'Mixed sports': 0,
        'Park Run - 5 Verst': 0,
        'Cricket': 0,
        'Extra sport events': 0,
        'Full hours': 0
      },
      id: '6344'
    }
  ];
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
      console.log(_data);
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
            All
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
