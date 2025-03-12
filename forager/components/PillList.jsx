import React from 'react';
import '../styles/globals.css'; 
import Pill from './Pill';

const PillList = ({parameterList, filterHandler, filterList}) => {
    return(
        <div className='flex flex-wrap ml-4 '>
        { 
        parameterList.map((parameter)=>{
                return (

                    <Pill key={parameter} selectionStatus={filterList.includes(parameter)} pillName={parameter} filterHandler={filterHandler} filterList={filterList}></Pill>
               )
            })
        }
        </div>
    );
};

export default PillList;