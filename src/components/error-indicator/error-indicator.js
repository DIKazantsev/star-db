import React from "react";
import icon from './deathstar.png'
import './error-indicator.css'

const ErrorIndicator = () => {
    return (
        <div>
            <img src={icon} alt='error-img' className='error' />
            <h3>BOOM</h3>
            <div>Something has gone terrible wrong</div>
        </div>
    )
}

export default ErrorIndicator;
