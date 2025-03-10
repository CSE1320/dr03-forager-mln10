"use client"
import React from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa'
import { useState } from 'react';

const Search = ({searchHandler}) => {
  const [query, setQuery] = useState('')  
  const doQuery=(eventObject)=>{
    searchHandler(eventObject.target.value)
  }
  return (
    <div className="flex items-center justify-between w-full bg-white border border-gray-300 rounded-full p-2 shadow-md">
      <div className="flex items-center">
        <FaSearch className="text-gray-500 ml-2" />
        <input
          type="text"
          onChange={doQuery}
          placeholder="Search"
          className="w-full px-4 py-2 text-gray-700 bg-white border-none rounded-full "
        />
      </div>
    </div>
    );
};
export default Search;