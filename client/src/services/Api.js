/**
 * file: src/services/Api.js
 * data: 01/03/2022
 * description: file responsible for initializing 'axios' and
 * HTTP base url requests
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

import axios from 'axios';

export default () => axios.create({
  // => Back-End 'baseURL'-> will make communication btw Front-End with Back-End
  // baseURL: process.env.VUE_APP_API_BASE_URL,

  // ==> Back-End (Azure Functions - locally)
  // baseURL: 'http://localhost:7071/api',

  // ==> Back-End (Azure Functions - deployed to ASWA)
  baseURL: '/api',
});
