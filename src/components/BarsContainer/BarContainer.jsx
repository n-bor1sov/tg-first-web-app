import React, {useState} from "react";
import "./BarContainer.css";
import ProgressBar from "../ProgressBar/ProgressBar";
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
        needHours="30"
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
          needPoints="400"
          points={client.Xp}
          description=""
        />
      </div>
      
     </div>
    </div>
    
  );
};

export default BarContainer;
