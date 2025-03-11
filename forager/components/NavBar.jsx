"use client"
import Link from 'next/link';
import { FaHome,  FaCamera} from 'react-icons/fa';
import { TbMushroom } from "react-icons/tb";
import styles from '../styles/NavBar.module.css'; 
import '../styles/globals.css'; 
import { useState } from 'react';


export default function NavBar() {
  const defaultIconColor = "#FFFFFF"
  const selectIconColor = "#b0e2cc"
  const [selectedIcon, setSelectedIcon] = useState('')
  const iconClick = (iconName)=>{
   setSelectedIcon(iconName) 
  }
 
  return (
    <div className={` ${styles.navbar} customGreen customNavbarContainer ` }>
        <div className='flex w-full flex-col items-center'>
          <div  className='flex w-full justify-evenly'>
            <Link href="/mushroom" passHref>
              <div onClick={()=>iconClick('mushroom')} className={`customNavbar ${styles.navItem}`}>
                <TbMushroom color={selectedIcon =='mushroom'?selectIconColor:defaultIconColor}/>
              </div>
            </Link> 
            <Link href="/dashboard" passHref>
              <div onClick={()=>iconClick('home')} className={`customNavbar ${styles.navItem}`}>
                <FaHome color={selectedIcon =='home'?selectIconColor:defaultIconColor} />
              </div>
            </Link>
            <Link href="/photosearch" passHref>
              <div onClick={()=>iconClick('cam')} className={`customNavbar ${styles.navItem}`}>
                <FaCamera color={selectedIcon =='cam'?selectIconColor:defaultIconColor} />
              </div>
            </Link>
          </div>
          <div className="w-36 h-1 bg-white rounded-full m-2"></div>
        </div>  
        </div>
  );
}
