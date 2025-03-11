"use client"
import Link from 'next/link';
import React from 'react';
import '../styles/globals.css'; 
import { IoChevronBack } from "react-icons/io5";
const TopNavBar = ({title, link}) => {
  return (
    <div className=' customGreen topNavBar'>
        <div className='flex justify-between pt-10'>
            <Link href={link} passHref>
                <IoChevronBack className='relative flex-none'size={48} color='white'/>
            </Link>
            <div className='text-white mr-8 flex-grow text-center text-2xl font-bold pt-2'>{title}</div>
        </div>  
    </div>
  )
};
export default TopNavBar;