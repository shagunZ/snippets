"use client"
import BgSelector from "@/components/BgSelector";
import CodeEditor from "@/components/CodeEditor";
import SelectLanguage from "@/components/SelectLanguage";
import ThemeSelector from "@/components/ThemeSelector";
import { backgrounds, languages, themes } from "@/utils/utilities";
import { useState } from "react";

export default function Home() {
  const [language,setLanguage] = useState(languages[0].name);

const [activeIcon,setActiveIcon] = useState(languages[0].icon);

const [theme,setTheme] = useState(themes[0]);

const [background,setBackground] = useState(backgrounds[0]);

  return <main className="h-[100vh] flex flex-col items-center justify-betweeen">
  
    <header
     className="mt-6 flex gap-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%]
    z-10 bg-[#191919] rounded border border-[#3C3C3C] shadow-md"> 
      <SelectLanguage language={language} setLanguage={setLanguage} setActiveIcon={setActiveIcon}/>
<ThemeSelector theme={theme} setTheme={setTheme}/>

<BgSelector background={background} setBackground={setBackground}/>

    </header>

<div className="code-editor-ref mt-[14rem]
">
  <CodeEditor language={language} icon={activeIcon}
  theme={theme} background={background}/>
</div>
  </main>
}
