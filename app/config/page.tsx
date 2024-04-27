'use client'
import React, { useState } from 'react'
import axios from 'axios';
import dynamic from 'next/dynamic';
import { CopyToClip } from '@/components/CopyToClip';

const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

const page = () => {
    const [ques,setques]=useState("");
const [ans,setans]=useState("")
const [loading,setLoading] = useState(false);
const [selectedLanguage,setSelectedLanguage]=useState('javascript');

    async function generate(){
        setLoading(true);
        setans('Just a second....')
        const response = await axios({
            url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAjBrSY4HpWS3bBEtBQXWARWB2uAJlr8ks",
            method:"post",
            data:
            {"contents":[{"parts":[{"text":
                `
                You are an expert programmer in all programming languages. Translate the natural language to "${selectedLanguage}" code. Do not include \\\\.

Example translating from natural language to JavaScript:

Natural language:
Print the numbers 0 to 9.

JavaScript code:
for (let i = 0; i < 10; i++) {
    console.log(i);
}

Natural language:
${ques}

${selectedLanguage} code (no \\\\):
                `
            }]}]},


        })
        console.log(response)
        console.log(response['data']['candidates'][0]['content']['parts'][0]['text'])
        setans(response['data']['candidates'][0]['content']['parts'][0]['text'])
        setLoading(false)
    }

  return (
    <div>
        <div className="container"
              style={{
                color:'black',
                maxWidth: '90%',
    margin: '0 auto',
    marginTop: '140px',
    marginBottom:'50px',
    padding: '20px',
    // backgroundColor: '#ead9f4',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              }}>
                <div className="mb-6">
                    <input
                    value={ques} onChange={(e)=>setques(e.target.value)} 
                    type="text" id="textbox1" placeholder="Enter your Question here"
                           className="block mx-auto w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500">
                    </input>
                 </div>
{/* select a language  */}
<select id="language" 
className="mx-auto mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
value={selectedLanguage}
onChange={(e) => setSelectedLanguage(e.target.value)}
>
                    <option value="">Select language</option>
                    <option value="c++">C++</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="javascript">JavaScript</option>
                    <option value="c#">C#</option>
                    <option value="typescript">TypeScript</option>
                 </select>
{/* <textarea value={ques} onChange={(e)=>setques(e.target.value)}>
</textarea> */}

    <div className="w-full text-center">
                    <button id="generateButton"
                            className="mx-auto text-white bg-gradient-to-br from-purple-600 to-violet-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2"
                            onClick={generate}
                            >
                       {loading? `Writing code....`: 'Generate Code'}
                    </button>
                 </div>
    {/* <pre>{ans}</pre> */}

    {/* copy to clipboard button  */}
<div className='bg-pink'>
    <CopyToClip text={ans}/>
</div>


{/* adding code editor  */}
<div className="edit">
<Editor
        height="400px"
        language={selectedLanguage}
        theme="vs-dark"
        defaultValue="// Generated code will appear here"
        defaultLanguage="javascript"
        value={ans}
        options={{
            readOnly: true,
            wordWrap: "wordWrapColumn", // Enable word wrapping at a specific column
            wordWrapColumn: 10,
        }}
        
    />
    <br />
</div>
    </div>
    </div>
  )
}

export default page