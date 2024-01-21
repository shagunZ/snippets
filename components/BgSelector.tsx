"use client" 

import { backgrounds } from '@/utils/utilities';
import { ChevronDown } from 'lucide-react';
import OutsideClickHandler from "react-outside-click-handler";
import React from 'react'

interface BgSelectorProps{
    background: string, 
    setBackground: (background: string)=>void; 
}

const BgSelector = ({background,setBackground}:BgSelectorProps) => {
  const [showDropdown,setShowDropdown] = React.useState(false);
    
 const toggleDropdown = ()=>{
    setShowDropdown(!showDropdown);
   }
   const handleBackgroundChange = (newBackground: string)=>{
    setBackground(newBackground)
   }

  return (
    <OutsideClickHandler onOutsideClick={()=>setShowDropdown(false)}>
    <div className='bg-selector relative' onClick={toggleDropdown}>
  <p className='py-[5px] text-sm font-medium'>Theme Selector</p>
    <div className='dropdown-title w-[62px]'>
      <div className='rounded-full w-[20px] h-[20px]'
      style={{
        background: background,
      }}></div>
            <ChevronDown/>
        </div>

        {showDropdown && (
      <div className='dropdown-menu w-[62px] top-[74px] rounded-full flex flex-col gap-2'>
        {backgrounds.map((bg,i)=>{
          return(
            <div key={i}
            style={{background: bg}}
            onClick={()=>handleBackgroundChange(bg)}
            className='w-[20px] h-[20px] rounded-full'>
            </div>
          )
        })}
      </div>
    )}
    </div>
    </OutsideClickHandler>
  )
}

export default BgSelector