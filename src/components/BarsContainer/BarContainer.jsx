import React, {useState} from "react";
import "./BarContainer.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useTelegram } from "../../hooks/useTelegram";

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
    challenge: { '3422': false, '7232': true, '3646': false , '6443': false, '2927': false, '3046': false, '2243': false, '6344': false},
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
      'Cricket': 0,
      'Extra sport events': 4
    },
    full_hours: 32
  }
  return user;
};

const BarContainer = () => {
    const {user} = useTelegram();
    const userID = user?.id;

    const [client, setClient] = useState({});
  
    React.useEffect(() => {
      const loadData = async () => {
        setClient(await getClient(userID));
        // console.log(client.challenge);
      };
  
      loadData();
    }, []);

    const lvlCalc = (xp) => {
      if(xp < 100) {
          return 1;
      } else if(xp < 1000) {
          return 2;
      } else {
          return 3;
      }
  }

  return (
    <div className="wrapper">
      <div data-testid="list-of-two-progress-bars" className={"list-bc"}>
      <ProgressBar
        type="Sport hours"
        name="Sport hours"
        needHours="14"
        hours={client.full_hours}
        description=""
      />
      <br />
      <br />
      <div className="row">
        <div className='lvl'>
            <div className="v-container">
                <div className="number">
                    {lvlCalc(client.Xp)} 
                </div>
                <p>lvl</p>
            </div>
        </div>
        <ProgressBar
          type="Sport points"
          name="Sport XP"
          needPoints="100"
          points={client.Xp}
          description=""
        />
      </div>
      
     </div>
    </div>
    
  );
};

export default BarContainer;
