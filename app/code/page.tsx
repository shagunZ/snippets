// pages/code-generation.js
"use client"
import { useState } from 'react';
import axios from 'axios';

const CodeGenerationPage = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateCode = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: prompt,
          max_tokens: 200, // You can adjust this parameter based on your needs
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `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`,
          },
        }
      );

      setGeneratedCode(response.data.choices[0]?.text || 'No code generated');
    } catch (error) {
      console.error('Error generating code:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Code Generation</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
        rows={5}
      />
      <button onClick={handleGenerateCode} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Code'}
      </button>
      <div>
        <h2>Generated Code:</h2>
        <pre>{generatedCode}</pre>
      </div>
    </div>
  );
};

export default CodeGenerationPage;
