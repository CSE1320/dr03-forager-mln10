import React from 'react';


const Mushroom = ({mushroom, isCompared}) => {
    const comparisonColor = mushroom.isEdible ? "bg-green-500": "bg-red-500"
    return (
        <>
            <div className="inline-flex items-start flex-col w-full ">
                <div className=" relative inline-block shadow-2xl border rounded p-1 pb-4 w-full">
                    <img   src={mushroom.imgSrc}></img>
                    {isCompared && (
                        <div className='absolute top-5 left-5 flex flex-start space-x-2 w-1/4 h-auto  '>
                                <p className={` ${comparisonColor} p-0.5 flex justify-center items-center w-3/4   rounded-lg text-white text-sm `}>{mushroom.matchRate}</p>
                            {!mushroom.isEdible && (
                                <img className="p-0.5 h-3 w-3 bg-red-500  flex justify-center items-center w-3/4 rounded-lg "  src="icons/icon_warning.svg" alt="icon" ></img>
                               )}
                        </div>)}  
                </div> 
                <div className= "w-full text-sm text-[#203B5F] text-center  pt-2">
                    <h4>{mushroom.mushroomName}</h4>
                </div>
            </div>
        </>
    );
};
export default Mushroom;