import React from 'react';
import {warningMessage} from '../data/development';
import '../styles/globals.css'; 
import Pill from './Pill';
import { TbDivide } from 'react-icons/tb';

const PillList = ({parameterList, filterHandler, filterList}) => {
    var isSelected = false
    return(
        <div className='flex flex-wrap ml-4 '>
        { 
        parameterList.map((parameter)=>{
                return (<>

                    <Pill key={parameterList.indexOf(parameter)} selectionStatus={filterList.includes(parameter)} pillName={parameter} filterHandler={filterHandler} filterList={filterList}></Pill>
                </>)
            })
        }
        </div>
    );
};

export default PillList;