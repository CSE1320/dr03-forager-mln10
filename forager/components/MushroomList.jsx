import React from 'react';
import Mushroom from '@/components/Mushroom';

const MushroomList = ({isCompare, isDashboard, mushList}) => {
    const mushroomList = mushList
    const doCompare = isDashboard ? false:true
    var cardRatio = "w-full h-full"
    if(isDashboard){
        cardRatio = "w-[27%] h-[27%]"
    }
    else if(doCompare){
        cardRatio = "w-[40%] h-[45%]"
    }
    return (
        <div className='ml-4'>
            <ul className="inline-flex flex-wrap w-full gap-x-6 justify-start"> 
                {
                    mushroomList.map((mushroom)=>{
                    return (
                        <li key={mushroom.id} className={`${cardRatio} `  }>
                            <Mushroom mushroom={mushroom} isCompared={isCompare} isSimilarMatch={doCompare} key={mushroom.id}   ></Mushroom>
                         </li>)
                    })
                }
            </ul>
        </div>
    );
};
export default MushroomList;