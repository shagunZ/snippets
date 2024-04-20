// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_APIKEY
// });

// const openai = new OpenAIApi(configuration);
// export default openai;


const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey:"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" 
});
export default openai;

