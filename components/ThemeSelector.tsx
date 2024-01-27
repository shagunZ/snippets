"use client"; 
import { themes } from '@/utils/utilities';
import { ChevronDown, Divide } from 'lucide-react';
import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';

interface ThemeSelectorProps{
    theme: string; 
    setTheme: (theme: string)=>void; 
}

const ThemeSelector = ({theme,setTheme}:ThemeSelectorProps) => {
  const [showDropdown,setShowDropdown] = React.useState(false);

const toggleDropdown=()=>{
    setShowDropdown(!showDropdown);
}

const handleThemeChange = (newTheme: string)=>{
    setTheme(newTheme);
}


    return (
    <OutsideClickHandler onOutsideClick={()=>setShowDropdown(false)}>

    <div className='theme-selector' onClick={toggleDropdown}>
         <p className='py-[5px] text-sm font-medium'>Code Color</p>
    <div className='dropdown-title capitalize w-[120px]'>
      {theme}
    <ChevronDown/>
    </div>
        {showDropdown && (
        <div className='dropdown-menu top-[94px] w-[120px]'>
            {themes.map((theme,i)=>{
            return (
            <button key={i} onClick={()=>handleThemeChange(theme)}
            className='capitalize cursor-pointer text-left  hover:text-white ease-linear transition-all duration-300'>
                {theme}
            </button>
        )})}</div>)}
    </div>
    </OutsideClickHandler>
  )
}

export default ThemeSelector
