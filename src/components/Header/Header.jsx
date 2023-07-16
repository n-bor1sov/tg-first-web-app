import React, { useState } from "react";
import "./Header.css";
import { useTelegram } from "../../hooks/useTelegram";
/**
 *
 * @param {number} userID
 * @returns
 */

const getClient = async (userID) => {
    let client = await fetch("http://45.131.96.241:5000/client/" + String(userID), {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return client.json();
  };

const Header = () => {
    const {user} = useTelegram();
    const userID = user?.id;

    const [client, setClient] = useState({});
  
    React.useEffect(() => {
      const loadData = async () => {
        setClient(await getClient(userID));
        console.log(client.challenge);
      };
  
      loadData();
    }, []); 
    return (
        <div className="row">
            <div className={"header"}>
                <div className={"name"}>
                    {user?.first_name + " " + user?.last_name}
                </div>
                <div className="email">
                    {client.login}
                </div>
            </div>
            <div className="lvl-sp">
                <div className="sp">
                    <div className="v-container">
                        <div className="number">{client?.Sp}</div>
                        <p>sp</p>
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default Header;
