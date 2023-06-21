import React from 'react'

const Button = () => (
    <button {...props} className={'button' + props.className}/>
);

export default Button;