import React from 'react';
import {filterOptionList} from '../data/development';
import '../styles/globals.css'; 
import Pill from './Pill';
import PillList from './PillList';

const FilterCategoryContainer = ({filterHandler, filteredList}) => {

    return(
       <div className='flex flex-col flex-star  m-5 mb-96'>
        {
          
            filterOptionList.map((category)=>{
                return (
                <div key={category.id} className='mb-12'>
                    <h3 className='filterListHeading'>{category.name}</h3>
                    <PillList  parameterList={category.filter}  filterHandler={filterHandler} filterList={filteredList}/>
                </div>)
            })
        }
        
       </div>
    );
};

export default FilterCategoryContainer;