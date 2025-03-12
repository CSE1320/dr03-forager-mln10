import MushroomPage from '@/app/mushroom/page';
import React from 'react';
import Link from 'next/link';
import { FaSkull } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import '../styles/globals.css';
const Mushroom = ({mushroom, isCompared=false, isSimilarMatch=false, hideTitle=false}) => {
    var comparisonColor = mushroom.isEdible ? "customGreen": "customRed"
    const isUserMush = (mushroom.matchRate==="")
    if(isUserMush){
        comparisonColor= "white"
    }
    return (
            <div className="inline-flex flex w-full h-full  flex-col  ">
               {!isCompared && (<>
                <div className="relative w-full flex flex-col shadow-2xl justify-center border rounded p-1 pb-8  bg-white">
                    <Link href={'/mushroom'}>
                        <img className='w-full h-full' src={mushroom.imgSrc} alt={mushroom.mushroomName}></img>
                    </Link>
                        <div className='absolute  top-2 left-2 flex flex-start space-x-1 w-1/4 h-auto   '>
                            {isSimilarMatch &&  (<div className={`${comparisonColor}  rounded-lg `}><p  className={`  p-1 text-center  text-white text-xs `}>{mushroom.matchRate}</p></div>)}  
                            {!mushroom.isEdible && (
                                <div className = 'flex h-full justify-center items-center w-full' ><IoIosWarning size={24} color="#FF5050"/></div>
                                )}
                        </div>
                </div> 
                <div className= "w-full text-sm mushroomTitle text-center  pt-2">
                    <h4>{mushroom.mushroomName}</h4>
                </div>
               </>)}
               {isCompared &&(
                <>
                <div className="flex flex-col  justify-center  shadow-2xl border rounded p-1 pb-8 w-full bg-white">
                    <div className='flex-start flex justify-start items-center pb-1'>
                        {!mushroom.isEdible && (<FaSkull color={isUserMush?"white":"black"} />)}
                        <div className={`flex ${comparisonColor} ml-3 items-center p-1 rounded-2xl text-white text-xs`}>
                            {!mushroom.isEdible && (<img className='w-4 h-auto' src="/icons/icon_warning.svg" alt='warning icon'></img>)}
                            <div className=''>
                            {`${mushroom.matchRate} Match`}
                            </div>
                        </div>
                    </div>
                    <img  className='w-full h-full'src={mushroom.imgSrc} alt={mushroom.mushroomName}></img>       
                </div> 
               {!hideTitle &&(
                <div className= "w-full text-sm mushroomTitle text-center  pt-2">
                    <h4>{mushroom.mushroomName}</h4>
                </div>
               )}
                
               </>

               )}
            </div>
       
    );
};
export default Mushroom;