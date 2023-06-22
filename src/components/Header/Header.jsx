import React from 'react'
import './Header.css'
import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={"wrapper"}>
            <div className={'header'}>
                <div className='name'>
                    {user?.first_name + " " + user?.last_name}
                </div>
            </div>
            
        </div>
        
    );
};

export default Header;