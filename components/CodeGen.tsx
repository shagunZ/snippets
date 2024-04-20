import React from 'react'
import { Send } from "lucide-react";
import Link from 'next/link';
const CodeGen = () => {
  return (
    <div>
        <div className="export-btn self-center ml-auto">
        <Link href="/config">
<button className="mt-4 p-2 px-3 gap-3 rounded-md flex items-center text-sm bg-blue-400 text-blue-400 font-medium bg-opacity-10 
hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all curation-300 "
>
  Generate Code
  <Send/>
</button>
</Link>
</div>
    </div>
  )
}

export default CodeGen