"use client";
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import "../public/icons/youtube.png"
const Footer = () => {
  return (
    <div className='flex items-center gap-10 py-16'>
        <Link
        className="flex text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
        href="https://www.youtube.com/@shagunZ/videos"
      >
<Image src="/icons/youtube.png" width={20} height={20} alt="" />
<p className="pl-1">View Demos &nbsp;&#129109;</p>
      </Link>
      <Link
        href="https://shagunz.vercel.app/"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
        <Image src="/icons/flare.png" width={20} height={20} alt="" />
        <span className="pl-1 font-medium text-slate-200">shagunZ</span>
      </Link>
      <Link
        href="https://github.com/shagunZ/snippets"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500 m-2"
      >
        <Image src="/icons/github.png" width={20} height={20} alt="" />
       <p className="pl-1">Source Code Here &nbsp;&#129109;</p>
      </Link>
    </div>
  )
}

export default Footer