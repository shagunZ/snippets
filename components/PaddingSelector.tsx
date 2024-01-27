"use client"; 
import React from 'react'
interface PaddingSelector{
  paddings : string[];
  currentPadding: string; 
  setCurrentPadding : (padding: string)=>void;
}

const PaddingSelector = ({
  paddings, 
  currentPadding, 
  setCurrentPadding
}: PaddingSelector) => {

  const changePadding = (newPadding: string)=>{
    setCurrentPadding(newPadding);
  }

  return (
    <div>
      <p className='py-[5px] text-sm font-medium'>Padding Selector</p>
      <div className='flex gap-6'>
      {paddings.map((padding,i)=>{
        return <button key={i} 
        className={`h-[35px] flex items-center justify-center cursor-pointer test-sm px-2
        ${currentPadding===padding && "bg-[#3C3C3C] text-white rounded-md"}
        hover:text-white ease-linear transition-all duration-300
        `}
        onClick={()=>changePadding(padding)}>
          {padding}
        </button>
      })}
      </div>
    </div>
  )
}

export default PaddingSelector