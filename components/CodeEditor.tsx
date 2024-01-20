"use client";

import React from 'react'
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
const CodeEditor = ({onCodeChange,language,theme,icon,background,currentPadding}) => {
  return (
    <Resizable minHeight={450}
    minWidth={500}
    maxWidth={1000}>
        <div>
            <AceEditor
            value="function(){return 'hello world'}"
            theme="monokai"
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