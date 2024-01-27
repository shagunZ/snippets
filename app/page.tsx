"use client"
import BgSelector from "@/components/BgSelector";
import CodeEditor from "@/components/CodeEditor";
import PaddingSelector from "@/components/PaddingSelector";
import SelectLanguage from "@/components/SelectLanguage";
import ThemeSelector from "@/components/ThemeSelector";
import { backgrounds, languages, themes } from "@/utils/utilities";
import { useState } from "react";
import { Download } from "lucide-react";
import Footer from "@/components/Footer";


export default function Home() {
 
const [language,setLanguage] = useState(languages[0].name);

const [activeIcon,setActiveIcon] = useState(languages[0].icon);

const [theme,setTheme] = useState(themes[0]);

const [background,setBackground] = useState(backgrounds[0]);

const [paddings,setPaddings] = useState(["1rem","2rem","3rem"]);
const [currentPadding,setCurrentPadding] = useState(paddings[2]);



  return <main className="h-[100vh] flex flex-col items-center justify-betweeen">
  
    <header
     className="mt-6 flex gap-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%]
    z-10 bg-[#191919] rounded border border-[#3C3C3C] shadow-md"> 
      <SelectLanguage language={language} setLanguage={setLanguage} setActiveIcon={setActiveIcon}/>
<ThemeSelector theme={theme} setTheme={setTheme}/>

<BgSelector background={background} setBackground={setBackground}/>

<PaddingSelector 
paddings={paddings} 
currentPadding={currentPadding} 
setCurrentPadding={setCurrentPadding}/>

<div className="export-btn self-center ml-auto">
<button className="py-2 px-3 gap-3 rounded-md flex items-center text-sm bg-blue-400 text-blue-400 font-medium bg-opacity-10 
hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all curation-300 ">
  Export PNG
  <Download/>
</button>
</div>
    </header>

<div className="code-editor-ref mt-[14rem]
">
  <CodeEditor 
  language={language} 
  icon={activeIcon}
  theme={theme} 
  background={background} 
  currentPadding={currentPadding}/>
</div>
<Footer/>
  </main>
}
