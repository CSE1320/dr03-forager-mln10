"use client"
import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import MushroomList from '@/components/MushroomList';
import { useState, useEffect } from 'react';
import '../../styles/globals.css'; 
import Search from '@/components/Search';
import {FaFilter } from 'react-icons/fa'
import FilterSettings from '@/components/FilterSettings';
import PillList from '@/components/PillList';
import { filterOptionList, mushList} from '@/data/development.jsx'

export default function DashboardPage() {
  const[isModal, setModal] = useState(false)
  const [mushroomList, setMushroomList] = useState(mushList)
  const [currentFilters, setCurrentFilters ] = useState([])
  
  const setFilters = ()=>{
    const temp = mushList.filter((mushroom)=>{
      if(mushroom.filters.some(el => currentFilters.includes(el))){
        return mushroom
      }
    })
    if(currentFilters.length>0){
      setMushroomList(temp)
    }
    else{
      setMushroomList(mushList)
    }
  
  }

  const handleFilterModal = ()=>{
    setFilters()
    setModal(!isModal)
  }
  const searchHandler =(query)=>{
    if(query===null || query==''){
      setMushroomList(mushList)
    }
    else{
      const filteredList = mushroomList.filter(mushroom =>
        mushroom.mushroomName.toLowerCase().includes(query.toLowerCase())
      )   
      setMushroomList(filteredList)
    }
  }

  const filterHandler= (name, isSelected)=>{
    if(isSelected){
      if(currentFilters.includes(name)){
        const temp = currentFilters.filter(item=>item!==name)
        setCurrentFilters(temp)
      }
    }
    else{
     var temp = currentFilters
     temp.push(name)
     setCurrentFilters(temp) 
    }
    
  }

  return (
    <div className="page customGreen">
      <div className='relative w-full h-1/6 '>
        <div className='flex flex-col p-5 pt-10  text-white'>
          <h1 className='text-2xl'>Hi,</h1>
          <h1 className='text-5xl font-bold'>Chantelle!</h1>
        </div>
        <img className= 'absolute top-0 right-1 z-0'src='assets/dashboard_mushroom.png'></img>
      </div>
      <div className='relative z-10 rounded-t-3xl h-full bg-gray-100 p-4'>
        <div className='flex items: center'>
          <Search searchHandler={searchHandler}/>
          <div onClick={handleFilterModal} className='p-4'>
            <FaFilter size={24} color='green'className="text-transparent border-current " />  
          </div>
        </div>
        <h3 className='font-bold text-xl mt-5 pl-4'>My Collection</h3>
        <PillList parameterList={currentFilters} filterHandler={filterHandler} filterList={currentFilters}  />
        <MushroomList isDashboard={true} mushList={mushroomList}></MushroomList>
      </div>
      <NavBar />
      {isModal && <div className='z-100'> <FilterSettings onClose={handleFilterModal} filterHandler={filterHandler}  currentFilters={currentFilters} /></div>}

    </div>
  );
}
