
// /** @type {import('next').NextConfig} */
// require('dotenv').config();

// module.exports = {
//     reactStrictMode: true,
//     env: {
//         API_KEY: process.env.API_KEY,
//         ORG_KEY: process.env.API_KEY2,
//     },
// };

// next.config.mjs
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

export default {
  reactStrictMode: true,
  env: {
    WORQHAT_API_KEY: process.env.API_KEY,
    WORQHAT_ORG_KEY: process.env.API_KEY2,
  },
};
