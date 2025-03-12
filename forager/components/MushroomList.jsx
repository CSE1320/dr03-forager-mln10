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
        cardRatio = "w-[40%] h-[40%]"
    }
    return (
        <div className='flex justify-center items-center w-full  '>
            <ul className=" w-full flex flex-wrap gap-x-6 justify-start  "> 
                {
                    mushroomList.map((mushroom)=>{
                    return (
                        <li key={mushroom.id} className={`${cardRatio}`  }>
                            <Mushroom mushroom={mushroom} isCompared={isCompare} isSimilarMatch={doCompare} key={mushroom.id}   ></Mushroom>
                         </li>)
                    })
                }
            </ul>
        </div>
    );
};
export default MushroomList;