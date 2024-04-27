"use client"
import BgSelector from "@/components/BgSelector";
import CodeEditor from "@/components/CodeEditor";
import PaddingSelector from "@/components/PaddingSelector";
import SelectLanguage from "@/components/SelectLanguage";
import ThemeSelector from "@/components/ThemeSelector";
import { backgrounds, languages, themes } from "@/utils/utilities";
import { useRef, useState } from "react";
import { Download } from "lucide-react";
import Footer from "@/components/Footer";
import html2canvas from "html2canvas";
import CodeGen from "@/components/CodeGen";
import Navbar from "@/components/Navbar";
import Template from "@/components/Template";
export default function Home() {
 
const [language,setLanguage] = useState(languages[0].name);

const [activeIcon,setActiveIcon] = useState(languages[0].icon);

const [theme,setTheme] = useState(themes[0]);

const [background,setBackground] = useState(backgrounds[0]);

const [paddings,setPaddings] = useState(["1rem","2rem","3rem"]);
const [currentPadding,setCurrentPadding] = useState(paddings[2]);

const editorRef = useRef(null);

const exportPng = async()=>{
const editorEle = editorRef.current;
if(editorEle){
  const handleElems = document.querySelectorAll(".handle") as any;
  const cursorEle = document.querySelector(".ace-cursor") as any;
  const codetitle = document.querySelector(".code-title") as any;

  handleElems.forEach((ele: any)=>{
    ele.style.display="none";
  });

  if (cursorEle) {
    cursorEle.style.display = "none";
  }
  
  if (codetitle) {
    codetitle.style.boxShadow = "none";
  }

  const canvas = await html2canvas(editorEle);
  const image = canvas.toDataURL("image/png").replace("image/png","image/octet-stream");
  const link = document.createElement("a");
  link.download = "code.png";
  link.href = image; 
  link.click(); 
  //show ele
  handleElems.forEach((ele:any)=>{
    ele.style.display="block";
  });
  if(cursorEle){
    cursorEle.style.display="block";
  }
  if(codetitle){
    codetitle.style.boxShadow="0 3px 10px rgba(0,0,0,0.2) !important";
  }

}

}

  return <main className="h-[100vh] flex flex-col items-center justify-betweeen">
  <Navbar />
  
{/* <Template/> */}
{/* <CodeGen/> */}
<Footer/>
  </main>
}
