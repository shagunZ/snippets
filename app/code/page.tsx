// @refresh
"use client"
import React from 'react';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });


const page = () => {


  async function fetchAIResponse(selectedLanguage: string, question: string) {
    const API_ENDPOINT = 'https://api.worqhat.com/api/ai/content/v2';
  
    const API_KEY = process.env.WORQHAT_API_KEY;
    const ORG_KEY = process.env.WORQHAT_API_KEY2;
  
    const prompt = "This is the command that will be sent to the API";
  
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
  
    if (API_KEY) {
      headers['x-api-key'] = API_KEY;
    }
  
    if (ORG_KEY) {
      headers['x-org-key'] = ORG_KEY;
    }
  
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        question: prompt,
        randomness: 0.4,
      }),
    };
  
    try {
      const response = await fetch(API_ENDPOINT, requestOptions);
      return await response.json();
    } catch (error) {
      console.error('Error in fetchAIResponse:', error);
      throw error; // Propagate the error
    }
  }
  

  const handleGenerateCodeClick = async () => {
    try {
      const languageElement = document.getElementById('language') as HTMLSelectElement | null;
      const textboxElement = document.getElementById('textbox1') as HTMLInputElement | null;
  
      if (languageElement && textboxElement) {
        const language = languageElement.value;
        const questionText = textboxElement.value;
  
        // Perform some logic or make an API call based on language and questionText
  
        // For now, let's log the values to the console
        console.log('Language:', language);
        console.log('Question Text:', questionText);
      } else {
        alert('Language element or textbox element is null or undefined.');
      }
    } catch (error) {
      console.error('Error in handleGenerateCodeClick:', error);
    }
  };
  
  

  return (
    <div className="text-black">
              <h1 className="text-4xl md:text-5xl text-center mt-8 font-bold">Text to Code Generator</h1>
              <div className="text-center mt-8 text-xl md:text-2xl font-semibold">
                 Generate Code from Natural Language using WorqHat AI in a Click!
              </div>

              <div className="container "
              style={{
                color:'black',
                maxWidth: '90%',
    margin: '0 auto',
    marginTop: '70px',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              }}>
                 <div className="mb-6">
                    <input type="text" id="textbox1" placeholder="Enter your Question here"
                           className="block mx-auto w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500">
                    </input>
                 </div>
                 <select id="language" className="mx-auto mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4">
                    <option value="">Select language</option>
                    <option value="c++">C++</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="javascript">JavaScript</option>
                    <option value="c#">C#</option>
                    <option value="php">PHP</option>
                    <option value="typescript">TypeScript</option>
                 </select>

                 <div className="w-full text-center">
                    <button id="generateButton"
                            className="mx-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2"
                            onClick={handleGenerateCodeClick}>
                       Generate Code
                    </button>
                 </div>


{/* adding code editor  */}
<div className="edit">
<Editor
        height="400px"
        language="javascript"
        theme="vs-dark"
        defaultValue="// Generated code will appear here"
        defaultLanguage="javascript"
        value="// Generated code will appear here"
        options={{
            readOnly: true,
            wordWrap: "wordWrapRow", // Enable word wrapping at a specific column
            wordWrapRow: 10,
        }}
        
    />
    <br />
</div>



              </div>
           </div>
   );
}

export default page