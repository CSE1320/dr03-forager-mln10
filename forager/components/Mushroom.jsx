import React from 'react';


const Mushroom = ({mushroom, isCompared}) => {
    const comparisonColor = mushroom.isEdible ? "bg-green-500": "bg-red-500"
    return (
        <>
            <div className="inline-flex items-start flex-col p-5">
                <div className="relative inline-block shadow-xl p-2.5 pb-12">
                    <img src={mushroom.imgSrc}></img>
                    {isCompared && (
                        <>
                            <div className={`absolute top-5 left-5 ${comparisonColor} flex items-center justify-center m-2 p-2 rounded-lg`}>
                                <p className=' text-white'>{mushroom.matchRate}</p>
                            </div> 
                            {!mushroom.isEdible && (
                                <>
                                    <div className="absolute top-5 left-20 flex items-center justify-center m-2 p-2 bg-red-500 rounded-lg">
                                        <img src="icons/icon_warning.svg" alt="icon" className="h-6 w-6 "></img>
                                    </div>
                                </>)}
                        </>)}  
                </div> 
                <div className= "w-full text-xl text-[#203B5F] text-center  p-5">
                    <h4>{mushroom.mushroomName}</h4>
                </div>
            </div>
        </>
    );
};
export default Mushroom;