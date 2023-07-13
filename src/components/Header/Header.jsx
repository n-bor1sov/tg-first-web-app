import React from 'react'
import './Header.css'
import { useTelegram } from '../../hooks/useTelegram';

const Header = () => {
    const {user, dataBase} = useTelegram();

    return (
        <div className={"wrapper"}>
            <div className={'header'}>
                <div className={'name'}>
                    {user?.first_name + " " + user?.last_name}
                </div>
                <div className='email'>
                    There will be inno email<br/>
                    after authentification
                </div>
                <div className='lvl-sp'>
                    <div className='lvl'>
                        <div className="v-container">
                            <div className="number">
                                {dataBase.users[0].level} 
                            </div>
                            <p>lvl</p>
                        </div>
                    </div>
                    <div className='sp'>
                        <div className="v-container">
                        <div className="number">
                            {dataBase.users[0].gems} 
                        </div>
                        <p>sp</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    );
};

export default Header;