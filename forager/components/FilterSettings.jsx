import React from 'react';
import {FaTimes } from 'react-icons/fa'
import FilterCategoryContainer from './FilterCategoryContainer';

const FilterSettings = ({onClose, filterHandler, currentFilters}) => {

    return (
        <div className=" fixed inset-0 w-9/10 h-full flex items-center justify-center  z-50">
          <div className='bg-gray-100 w-full h-[95%] m-2 mb-8 mt-12 rounded-xl'>
            <div className='flex justify-between items-center '>              
                <div className='flex-1 text-center m-2'>
                    <h3  className='font-bold text-lg'>FILTER</h3>
                </div>
                <div className='ml-auto m-2'>
                    <FaTimes onClick={onClose} className="cursor-pointer text-gray-600 hover:text-gray-900" size={24} />
                </div>
            </div>  
            <div className='flex flex-col justify-center'>
            
                <FilterCategoryContainer filterHandler= {filterHandler}  filteredList = {currentFilters}/>
            </div>
          </div>
        </div>
        )
};

export default FilterSettings;