"use client";

import React,{useEffect} from 'react'
import { Resizable } from 're-resizable';
import AceEditor from "react-ace";
//themes
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/theme-terminal"
import "ace-builds/src-noconflict/theme-twilight"
//languages 
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/mode-css"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-noconflict/mode-java"
import "ace-builds/src-noconflict/mode-typescript"
import "ace-builds/src-noconflict/mode-c_cpp"
import "ace-builds/src-noconflict/mode-csharp"

interface CodeEditorProps{
  onCodeChange: (code:string)=>void; 
  language : string; 
  theme: string; 
  icon: string; 
  background?:string; 
  currentPadding?: string; 
}
const CodeEditor = ({onCodeChange,language,theme,icon,background,currentPadding}:CodeEditorProps) => {
  const [width,setWidth] = React.useState(1000);
  const [height,setHeight] = React.useState<number|null>(500);

  //@ts-ignore
  const handleResize=(evt,direction,ref,pos)=>{
    const newHeight = ref.style.height; 
    setHeight(parseInt(newHeight));
  };

  const updateSize=()=>{
    setWidth(window.innerWidth);
  };

  useEffect(()=>{
    window.addEventListener("resize",updateSize);
    updateSize();
    return()=>window.removeEventListener("resize",updateSize);
  },[])

  return (
    <Resizable minHeight={450}
    minWidth={500}
    maxWidth={1000}
    defaultSize={{
      width:width,
      height:height || 500,
    }}
    onResize={handleResize}
    className='resize-container relative'
    style={{background: background}}
    >
        <div className='code-block' style={{padding: currentPadding}}>
          <div className='code-title h-[52px] px-4 flex items-center justify-between bg-black bg-opacity-80'>
            <div className='dots flex item-center gap-1'>
              <div className='w-3 h-3 rounded-full bg-[#ff5656]'></div>
              <div className='w-3 h-3 rounded-full bg-[#ffbc6a]'></div>
              <div className='w-3 h-3 rounded-full bg-[#67f772]'></div>
            </div>

<div className='input-control w-full'>
  <input type="text" className='w-full text-[hsla(0,0%,100%,.6)] outline-none font-medium text-center bg-transparent'
  />
</div>

<div className='icon flex justify-center items-center p-1 bg-black bg-opacity-30 rounded-sm'>
  <img src={icon} alt="ic" />
</div>

          </div>
            <AceEditor
            value="function(){return 'hello world'}"
            theme={theme}
            name="UNIQUE_ID_OF_DIV"
            mode={language.toLocaleLowerCase()}
            showGutter={false}
            fontSize={16}
            wrapEnabled={true}
            showPrintMargin={false}
            highlightActiveLine={false}
            editorProps={{$blockScrolling:true}}
            className="ace-editor-container"/>
        </div>
    </Resizable>
  )
}

export default CodeEditor