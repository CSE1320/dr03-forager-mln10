"use client"
import React, { useState } from 'react';

import '../styles/globals.css'; 
const Pill = ({pillName, filterHandler, filterList, selectionStatus}) => {
    const [pillColor, setPillColor] = useState(selectionStatus?"customGreen":"bg-gray-300")
    const [isSelected, setSelected] = useState(selectionStatus)
    const [textColor, setTextColor] = useState(selectionStatus?"text-white":"text-black")
   
    const handleFilter = ()=>
    {
        console.log(isSelected)
        filterHandler(pillName, selectionStatus)

        setSelected(!isSelected)
       
        setPillColor(!isSelected?"customGreen":"bg-gray-300")
        setTextColor(!isSelected?"text-white":"text-black")
        console.log(isSelected)
    }

    return(
        <div   className='m-1'>
            <div onClick= {handleFilter} className={`font-nunito ${textColor} inline-block items-center text-xs rounded-full ${pillColor} hover:scale-105 hover:shadow-lg text-white px-5 py-1 `}>{pillName}</div>
        </div>
    );
};

export default Pill;