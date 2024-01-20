"use client"
import CodeEditor from "@/components/CodeEditor";
import SelectLanguage from "@/components/SelectLanguage";
import { languages } from "@/utils/utilities";
import { useState } from "react";

export default function Home() {
  const [language,setLanguage] = useState(languages[0].name);
  return <main>
    <header>
      <SelectLanguage />
    </header>
<div className="code-editor-ref">
  <CodeEditor language={language}/>
</div>
  </main>
}
