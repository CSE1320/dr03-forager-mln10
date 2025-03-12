"use client"
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import TopNavBar from '@/components/TopNavBar';
import Message from '@/components/Message';
import { FaGreaterThan, FaCirclePlus } from "react-icons/fa6"
import { FaCheckCircle } from "react-icons/fa";
import '../../styles/globals.css';
import {warningMessage,mushList,percentageInfo, warningMatchResult, similarMatches} from '@/data/development.jsx';
import Mushroom from '@/components/Mushroom';
import { IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';
import MushroomFastFacts from '@/components/MushroomFastFacts';
import MushroomList from '@/components/MushroomList';
import { CiCircleInfo } from "react-icons/ci";

export default function MushroomPage({mushroom = mushList[0]}) {
  const [isFavorite, setIsFavorite] = useState((mushroom.filters.includes("Favorites")))
  const[isModal, setModal] = useState(false)
  const[isWarningModal, setWarningModal] = useState(true)
  const showWarningModal = ()=> {
    setWarningModal(!isWarningModal)
  }
  const showPercentInfoModal= ()=>{
    setModal(!isModal)
}
  const addToFavorites = ()=>{
  mushroom.filters.push("Favorites")
  setIsFavorite(!isFavorite)
}
  return (
    <div className="page flex flex-col ">
      <TopNavBar title={'Match Results'} link={'/dashboard'}/>
      <div className='flex justify-between m-1 ml-4 mr-4  items-center'>
        <h6 className='text-sm'> Not what you expected?</h6>
        <div className='customRed text-white rounded-xl'>
          <div className='flex justify-between items-center space-x-1 p-2'>
            <div className='flex-none'>Report Error</div>  
            <FaGreaterThan className='flex-grow text-center'/>
          </ div>
        </div>
      </div>
      <div className=' ml-4 mr-4 '>
        {!mushroom.isEdible &&(<>
          <Message  messageElement = {warningMessage}/>
        </>)}  
      </div>
      <div className=' flex h-full  flex-col justify-center ml-4 mr-4'>
        <Link href="/comparison">
          <div className='flex justify-end items-center'>
              <div className='pr-1'>Compare</div>
              <IoIosArrowForward/>
          </div>
        </Link>
        <Mushroom  mushroom={mushroom} isCompared={true} isSimilarMatch={false} hideTitle={true}/>
      </div>
      <div className='flex justify-between ml-4 mr-4 items-center'>
        <div className='flex p-1 flex-col'>
          <h2 className='font-bold mushroomTitle text-3xl'>{mushroom.mushroomName}</h2>
          <h5 className='italic mushroomScientificTitle text-xl'>{mushroom.scientificName}</h5>
        </div>
        {/* custom Green color is hardcoded below, for some reason the icons dont detect css classes defined in global */}
        {!isFavorite&& <FaCirclePlus onClick={addToFavorites}  size={48} color="#579076" />}
        {isFavorite&& <FaCheckCircle   size={48} color="#579076" />}
      </div>
      <div className='flex flex-col items-center ml-4 mr-4'>
          <MushroomFastFacts messageElement={mushroom.facts}/>
      </div>
      <p className='mr-4 ml-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
      <div className='mr-4 ml-4 flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center m-2'>
          <h2 className='font-bold mushroomTitle text-3xl '>Similar Matches</h2>
          <CiCircleInfo size={36} className='pl-2'onClick={showPercentInfoModal}/>
        </div>
        <div className='flex justify-center  ml-12 mr-4 mb-20 '>
          <MushroomList  isCompare={false} isDashboard={false} mushList={similarMatches} />
        </div>
      </div>
      <NavBar />
      {isModal&&(  
        <div className='mb-4 ml-4 mr-4'>
          <Message messageElement={percentageInfo} isModal={true} setModal={showPercentInfoModal}  />
        </div>  
      )}
      {isWarningModal&&(  
        <div className='mb-4 ml-4 w-full mr-4 '>
          <Message messageElement={warningMatchResult} isModal={true} setModal={showWarningModal}  />
        </div>  
      )}
    </div>
  );
}
