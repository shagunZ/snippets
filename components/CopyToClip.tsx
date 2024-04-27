"use client"
import React, { useState } from 'react'
import copy from 'clipboard-copy'
import copysvg from '../public/icons/copy.svg'
import Image from 'next/image'
interface copyToClipBoard{
    text:string
}

export const CopyToClip = ({text}: copyToClipBoard) => {
  const [isCopied,setIsCopied]=useState(false);

  const handleCopyClick = async()=>{
    try{
        await copy(text);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    }catch(err){
        await copy("err");
    }
  }
    return (
    <div className='right-0 flex items-end justify-end cursor-pointer'>
        <button className='flex' onClick={handleCopyClick}>
            {isCopied?(
                <>✔️
                Copied!
                </>
            ):(<>
                <Image 
                src={ "icons/copy.svg"}
                alt={"copy"}
                width={30}
                height={30}
                className='rounded'
                /> 
                </>
            )}
           
        </button>
    </div>
  )
}
