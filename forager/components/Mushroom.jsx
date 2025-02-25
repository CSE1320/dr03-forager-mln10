import React from 'react';


const Mushroom = ({mushroom}) => {
    return (
        <>
            <div className="inline-flex items-start flex-col p-5">
                <div className=" relative inline-block shadow-xl p-2.5 pb-12">
                    <img src={mushroom.imgSrc}></img>
                </div> 
                <div className= "w-full text-xl text-[#203B5F] text-center  p-5">
                    <h4>False Death Cap</h4>
                </div>
            </div>
        </>
    );
};

export default Mushroom;