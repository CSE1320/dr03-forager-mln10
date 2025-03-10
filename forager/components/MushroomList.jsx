import React from 'react';
;
import Mushroom from '@/components/Mushroom';
const MushroomList = ({isCompare, isDashboard, mushList}) => {
    const mushroomList = mushList
    const doCompare = isDashboard ? false:true
    var cardRatio = "w-full h-full"
    if(isDashboard){
        cardRatio = "w-[27%] h-[27%]"
    }
    else if(doCompare){
        cardRatio = "w-1/2 h-1/2"
    }
    return (
        <div>
            <ul className="flex flex-wrap "> 
                {
                    mushroomList.map((mushroom)=>{
                    return (
                        <li className={`${cardRatio} m-3`  }>
                            <Mushroom mushroom={mushroom} isCompared={doCompare} key={mushroom.id} ></Mushroom>
                        </li>)
                    })
                }
            </ul>
        </div>
    );
};
export default MushroomList;