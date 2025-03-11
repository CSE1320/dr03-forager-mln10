import React from 'react';

import '../styles/globals.css';

const MushroomFastFacts = ({messageElement}) => {
    var hasIcon = false
    if(messageElement.icon!==''){
        hasIcon=true
    }
    return (
        <div className={`message rounded-3xl ${messageElement.color} text-sm w-full font-medium text-white px-4 py-4 mx-4`}>
            <div className="header flex items-center pb-2">
                {hasIcon&&(<>
                    <img width="27px" height="27px" className="" src={messageElement.icon}></img>
                </>)}
                <h1 className="text-xl">{messageElement.header}</h1>
            </div>
            <p >{`Cap Diameter: ${messageElement.capDiameter}`}</p>
            <p >{`Gill color: ${messageElement.gillColor}`}</p>
        </div>
    );
};
export default MushroomFastFacts;