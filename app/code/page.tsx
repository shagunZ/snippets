// @refresh
"use client"
import React,{useState} from 'react';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

//prompt
const createPrompt = (inputLanguage: string, inputCode: string) => {
  return `
You are an expert programmer in all programming languages. Translate the natural language to "${inputLanguage}" code. Do not include \\\\.

Example translating from natural language to JavaScript:

Natural language:
Print the numbers 0 to 9.

JavaScript code:
for (let i = 0; i < 10; i++) {
    console.log(i);
}

Natural language:
${inputCode}

${inputLanguage} code (no \\\\):
`;
};


const page = () => {
  const [generatedCode, setGeneratedCode] = useState('');
  const [selectedLanguage,setSelectedLanguage] = useState('');
  const [loading,setLoading] = useState(false);

  async function fetchAIResponse(selectedLanguage: string, question: string) {
    const API_ENDPOINT = 'https://api.worqhat.com/api/ai/content/v2';
    // const API_ENDPOINT = 'http://localhost:3000/api/ai/content/v2';

    const API_KEY = process.env.API_KEY;
    const ORG_KEY = process.env.ORG_KEY;
  
    const prompt = createPrompt(selectedLanguage,question);
  console.log("api",API_KEY);
  console.log("orgkey",ORG_KEY);
  console.log("end",API_ENDPOINT);

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
  
    if (API_KEY) {
      headers['x-api-key'] = API_KEY;
    }
  
    // if (ORG_KEY) {
    //   headers['x-org-key'] = ORG_KEY;
    // }
  
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
      console.log("reqoppt", response)
    //   console.log('Response Status:', response.status);
    //   console.log('Response Headers:', response.headers);
    //   const responseBody = await response.text();
    //   console.log('Response Body:', responseBody);
    
    //   if (!response.ok) {
    //     console.error(`Error: ${response.status} - ${response.statusText}`);
    //     throw new Error('Non-successful response');
    //   }
    
    //   return await response.json();
    } catch (error) {
      console.error('Error in fetchAIResponse:', error);
    //   throw error; // Propagate the error
    }
    
  }
  

  const handleGenerateCodeClick = async () => {
    setLoading(true);
    
    
    try {
      const languageElement = document.getElementById('language') as HTMLSelectElement | null;
      const textboxElement = document.getElementById('textbox1') as HTMLInputElement | null;
      
      if (languageElement && textboxElement) {
        const language = languageElement.value;
        const questionText = textboxElement.value;
        console.log("working")
        
        const responseData = await fetchAIResponse(language, questionText);
  console.log("res",responseData)
        // if (responseData && responseData.status === 'success') {
        //   let responseCode = responseData.content || '';
        //   if (responseCode.includes('```')) {
        //     responseCode = responseCode.split('```')[1];
        //   }
        //   setGeneratedCode(responseCode);
        // } else {
        //   setGeneratedCode('Sorry, we could not generate code for your question. Please try again.');
        // }
      } else {
        console.log('Language element or textbox element is null or undefined.');
      }
    } catch (error) {
      console.error('Error in handleGenerateCodeClick:', error);
      setGeneratedCode('An error occurred while generating code. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  
  return (
    <div className="text-black">             
              <div className="container"
              style={{
                color:'black',
                maxWidth: '90%',
    margin: '0 auto',
    marginTop: '70px',
    padding: '20px',
    backgroundColor: '#ead9f4',
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
                            className="mx-auto text-white bg-gradient-to-br from-purple-600 to-violet-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2"
                            onClick={handleGenerateCodeClick}
                            >
                       {loading? `Writing code....`: 'Generate Code'}
                    </button>
                 </div>


{/* adding code editor  */}
<div className="edit">
<Editor
        height="400px"
        language={selectedLanguage}
        theme="vs-dark"
        defaultValue="// Generated code will appear here"
        defaultLanguage="javascript"
        value={generatedCode}
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